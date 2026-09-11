import { defineConfig } from '@playwright/test';
import { existsSync } from 'node:fs';

const chrome = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
export default defineConfig({
  testDir: './tests',
  timeout: 90_000,
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  outputDir: '.preview/test-results',
  use: {
    baseURL: process.env.PORTFOLIO_URL || 'http://localhost:4180',
    viewport: { width: 1440, height: 900 },
    reducedMotion: 'reduce',
    launchOptions: existsSync(chrome) ? { executablePath: chrome } : {},
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: process.env.PORTFOLIO_URL ? undefined : {
    command: 'node server.mjs --production',
    url: 'http://localhost:4180',
    env: { PORT: '4180' },
    reuseExistingServer: false,
  },
});
