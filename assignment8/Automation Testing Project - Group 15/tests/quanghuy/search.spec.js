// Integrated from QuangHuy. Legacy expected-result coverage is limited, see integration audit.
const { test, expect } = require('../../support/fixtures.cjs');
const cases = require('./data/testcases.json').filter(item => item.group === 'search');
const { runGhostInspectorCase } = require('./support/ghost-runner');

test.beforeEach(async ({}, info) => { info.annotations.push({type:'coverage-warning', description:'Legacy source: several cases assert only body/URL. Pass does not prove the full named behavior.'}); });

test.describe('CellphoneS - Search', () => {
  for (const testCase of cases) {
    test(`${testCase.id} - ${testCase.name} @search`, async ({ page }) => {
      test.skip(!process.env.TEST_PHONE || !process.env.TEST_PASSWORD, 'Script gốc yêu cầu tài khoản test TEST_PHONE và TEST_PASSWORD. Chưa có dữ liệu tài khoản.');
      await runGhostInspectorCase(page, testCase);
      await expect(page.locator('body')).toBeVisible();
      expect(page.url()).toContain('cellphones.com.vn');
    });
  }
});
