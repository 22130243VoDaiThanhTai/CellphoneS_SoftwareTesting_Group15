process.env.ASM7_BLOCK_FILE ||= require('path').join(require('os').tmpdir(), `asm7-block-${process.pid}-${Date.now()}`);
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  testMatch: '22130275_TrinhQuangThong_ASM7.spec.js',
  timeout: 30_000,
  expect: { timeout: 8_000 },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  maxFailures: 0,
  reporter: [['list'], ['html', { open: 'never' }], ['json', { outputFile: 'test-results/results.json' }]],
  use: {
    baseURL: 'https://cellphones.com.vn',
    browserName: 'chromium',
    headless: false,
    channel: process.env.PW_CHANNEL || 'chrome',
    launchOptions: { slowMo: 500 },
    viewport: { width: 1280, height: 800 },
    locale: 'vi-VN',
    video: 'off',
    trace: 'off',
  },
});
