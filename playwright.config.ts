import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve('./global-setup'),
  testDir: './tests',
  timeout: 10000,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  use: {
    headless: true,
    viewport: { width: 1920, height: 1080 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://buggy.justtestit.org',
    storageState: 'data/storageState.json', 
  },
  projects: [
    {
      name: 'firefox',
      use:{
        browserName: 'firefox'
      }
    }
  ]
});
