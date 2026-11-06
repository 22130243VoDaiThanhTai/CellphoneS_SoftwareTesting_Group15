const { expect } = require('@playwright/test');

function resolveValue(value) {
  if (typeof value !== 'string') return value;
  return value
    .replaceAll('{{TEST_PHONE}}', process.env.TEST_PHONE || '')
    .replaceAll('{{TEST_PASSWORD}}', process.env.TEST_PASSWORD || '');
}

function selectorCandidates(target) {
  if (Array.isArray(target)) {
    return target.map(item => typeof item === 'string' ? item : item.selector).filter(Boolean);
  }
  if (typeof target === 'string') return [target];
  throw new Error(`Unsupported selector format: ${JSON.stringify(target)}`);
}

function asLocator(page, selector) {
  return selector.startsWith('//') || selector.startsWith('(//')
    ? page.locator(`xpath=${selector}`)
    : page.locator(selector);
}

async function findVisibleLocator(page, target, stepNumber) {
  const candidates = selectorCandidates(target);
  for (const selector of candidates) {
    const locator = asLocator(page, selector).first();
    try {
      await locator.waitFor({ state: 'visible', timeout: 3500 });
      return locator;
    } catch (_) {
      // Try the next alternative selector from the Ghost Inspector export.
    }
  }
  throw new Error(`Step ${stepNumber}: none of these selectors became visible: ${candidates.join(' || ')}`);
}

async function runGhostInspectorCase(page, testCase) {
  const needsPhone = testCase.steps.some(s => s.value === '{{TEST_PHONE}}');
  const needsPassword = testCase.steps.some(s => s.value === '{{TEST_PASSWORD}}');
  if (needsPhone && !process.env.TEST_PHONE) {
    throw new Error('Missing TEST_PHONE. Copy .env.example to .env and enter a test-account phone number.');
  }
  if (needsPassword && !process.env.TEST_PASSWORD) {
    throw new Error('Missing TEST_PASSWORD. Copy .env.example to .env and enter the test-account password.');
  }

  await page.goto(testCase.startUrl, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('body')).toBeVisible();

  for (let index = 0; index < testCase.steps.length; index++) {
    const step = testCase.steps[index];
    const stepNumber = index + 1;
    const locator = await findVisibleLocator(page, step.target, stepNumber);

    try {
      if (step.command === 'click') {
        await locator.click();
      } else if (step.command === 'assign') {
        await locator.fill(resolveValue(step.value ?? ''));
      } else if (step.command === 'keypress') {
        const key = String(step.value) === '13' ? 'Enter' : String(step.value);
        await locator.press(key);
      } else {
        throw new Error(`Unsupported Ghost Inspector command: ${step.command}`);
      }
      await page.waitForTimeout(250);
    } catch (error) {
      throw new Error(`${testCase.id}, step ${stepNumber} (${step.command}): ${error.message}`);
    }
  }

  // The original JSON exports contain actions/selectors but no explicit expected-result assertions.
  // These checks confirm that the website remains loaded; add business-specific assertions
  // after confirming the expected result with the assignment's test-case specification.
  await expect(page.locator('body')).toBeVisible();
  expect(page.url()).toContain('cellphones.com.vn');
}

module.exports = { runGhostInspectorCase };
