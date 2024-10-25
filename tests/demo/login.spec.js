import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';

test('test', async ({ page }) => {
  const login = new LoginPage(page);  // Note: lowercase 'login' is a common convention
  await login.goto();                 // Navigate to the login page or await login.goto(LoginPage);
  await login.login('tomsmith', 'SuperSecretPassword!'); // Perform login
});
  //await page.goto('https://the-internet.herokuapp.com/login');
  //await page.getByLabel('Username').click();
  //await page.getByLabel('Username').fill('tomsmith');
 //await page.getByLabel('Password').click();
  //await page.getByLabel('Password').click();
  //await page.getByLabel('Password').fill('SuperSecretPassword!');
  //await page.getByRole('button', { name: ' Login' }).click();
