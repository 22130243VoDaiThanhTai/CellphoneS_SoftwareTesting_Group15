const path = require('node:path');
const { defineConfig } = require('@playwright/test');
process.env.GROUP15_RUN_ID ||= `asm7-${Date.now()}`;
const runId = process.env.GROUP15_RUN_ID;
if (!/^[A-Za-z0-9_-]+$/.test(runId)) throw new Error('Invalid run ID');
const runDir = path.join(__dirname, 'run-evidence', runId);
process.env.GROUP15_EVIDENCE_DIR = runDir;
process.env.ASM7_BLOCK_FILE = path.join(runDir, 'logs', 'website-blocked.json');
const listing = process.argv.includes('--list');
module.exports = defineConfig({
  testDir: '.', testMatch: '22130275_TrinhQuangThong_ASM7.spec.js',
  timeout: 30000, expect: { timeout: 8000 }, fullyParallel: false,
  workers: 1, retries: 0,
  outputDir: path.join(runDir, 'artifacts'),
  reporter: listing ? [['list']] : [
    ['list'], ['html', {outputFolder:path.join(runDir,'report'),open:'never'}],
    ['json', {outputFile:path.join(runDir,'results.json')}],
    [path.join(__dirname,'support/summary-reporter.cjs'), {reportDir:path.join(runDir,'report'),runId}]
  ],
  use: {
    baseURL:'https://cellphones.com.vn', browserName:'chromium',
    channel:process.env.PW_CHANNEL || 'chrome', headless:false,
    launchOptions:{slowMo:500}, viewport:{width:1280,height:800},locale:'vi-VN',
    actionTimeout:20000, navigationTimeout:30000,
    trace:'retain-on-failure', screenshot:'only-on-failure',
    video:process.env.ASM7_DEMO === '1' ? { mode:'on', size:{width:1280,height:800} } : 'off'
  },
  projects:[
    {name:'cp',grep:/PRODUCT_COMPARE_/,timeout:60000},
    {name:'rv',grep:/PRODUCT_REVIEW_/,timeout:60000},
    {name:'pd',grep:/PRODUCT_DETAIL_/}
  ]
});
