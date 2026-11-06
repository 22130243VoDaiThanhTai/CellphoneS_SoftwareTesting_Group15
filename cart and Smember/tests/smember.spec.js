const { test } = require('@playwright/test');
const cases = require('./cases.json');
const { runGhostSteps } = require('../support/ghost-runner');

for (const scenario of cases.filter((item) => item.group === 'SMEMBER')) {
  test(`${scenario.id} — ${scenario.title}`, async ({ page }) => {
    test.info().annotations.push(
      { type: 'Expected result (workbook)', description: scenario.expected },
      { type: 'Source procedure', description: scenario.procedure }
    );
    await runGhostSteps(page, scenario.steps);
  });
}
