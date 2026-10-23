import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: './automation/tests',
  timeout: 90_000,
  expect: {timeout: 20_000},
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [['list'], ['html', {open: 'never'}], ['json', {outputFile: 'test-results/results.json'}]],
  use: {
    ...devices['Desktop Chrome'],
    baseURL: 'https://cellphones.com.vn',
    viewport: {width: 1280, height: 800},
    locale: 'vi-VN',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    actionTimeout: 20_000
  },
  projects: [{name: 'chromium', use: {browserName: 'chromium'}}]
});
