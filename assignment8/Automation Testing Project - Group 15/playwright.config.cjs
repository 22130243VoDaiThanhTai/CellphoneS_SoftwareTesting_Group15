const path = require('node:path');
const { defineConfig } = require('@playwright/test');
const listing = process.argv.includes('--list');
process.env.GROUP15_RUN_ID ||= `run-${Date.now()}`;
const runId = process.env.GROUP15_RUN_ID;
if (!/^[A-Za-z0-9_-]+$/.test(runId)) throw new Error('Invalid run ID');
const reportDir = path.resolve(__dirname, '..', 'Test Report - Group 15', runId);
const evidenceDir = path.resolve(__dirname, '..', 'Envidence - Group15', runId);
process.env.GROUP15_EVIDENCE_DIR = evidenceDir;
// The imported PD suite and the shared fixture use the same per-run blocking flag.
process.env.ASM7_BLOCK_FILE = path.join(evidenceDir, 'logs', 'website-blocked.json');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 30_000,
  expect: { timeout: 8_000 },
  outputDir: path.join(evidenceDir, 'artifacts'),
  reporter: listing ? [['list']] : [
    ['list'],
    ['html', { outputFolder: reportDir, open: 'never' }],
    ['json', { outputFile: path.join(reportDir, 'results.json') }],
    [path.join(__dirname, 'support', 'summary-reporter.cjs'), { reportDir, runId }],
  ],
  use: {
    baseURL: 'https://cellphones.com.vn',
    browserName: 'chromium',
    channel: process.env.PW_CHANNEL || 'chrome',
    headless: false,
    viewport: { width: 1280, height: 800 },
    locale: 'vi-VN',
    launchOptions: { slowMo: 500 },
    actionTimeout: 20_000,
    navigationTimeout: 30_000,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'off',
  },
  projects: [
    { name: 'cp', testMatch: '**/quangthong/*_CP_RV.spec.js', grep: /PRODUCT_COMPARE_/, timeout: 60_000 },
    { name: 'rv', testMatch: '**/quangthong/*_CP_RV.spec.js', grep: /PRODUCT_REVIEW_/, timeout: 60_000 },
    { name: 'pd', testMatch: '**/quangthong/22130275_TrinhQuangThong_ASM8.spec.js', timeout: 30_000, expect: { timeout: 8_000 } },
  ],
});
