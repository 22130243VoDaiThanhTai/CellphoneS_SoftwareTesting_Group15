const { test, expect } = require('@playwright/test');
const cases = require('./data/testcases.json').filter(item => item.group === 'search');
const { runGhostInspectorCase } = require('./support/ghost-runner');

test.describe('CellphoneS - Search', () => {
  for (const testCase of cases) {
    test(`${testCase.id} - ${testCase.name} @search`, async ({ page }) => {
      await runGhostInspectorCase(page, testCase);
      await expect(page.locator('body')).toBeVisible();
      expect(page.url()).toContain('cellphones.com.vn');
    });
  }
});
