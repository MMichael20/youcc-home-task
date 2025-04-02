import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from './pages/LoginPage'
import { generateUser } from './utils/test.data';
import { writeFile } from 'fs/promises';
import { RegisterPage } from './pages/RegisterPage';

async function globalSetup(config: FullConfig) {
const browser = await chromium.launch({headless: true });
const context = await browser.newContext();
const page = await context.newPage();

const user = generateUser();
  await writeFile('data/data.json', JSON.stringify({ username: user.username, password: user.password }, null, 2), 'utf8');

  const registerPage = new RegisterPage(page);
  await registerPage.goto();
  await registerPage.register(user.username, user.firstName, user.lastName, user.password);
  await registerPage.expectSuccessMessage();

  const loginPage = new LoginPage(page);
  await loginPage.fillUsername(user.username);
  await loginPage.fillPassword(user.password);
  await loginPage.clickLogin();
  await context.storageState({ path: 'data/storageState.json' });
  await browser.close();
}

export default globalSetup;