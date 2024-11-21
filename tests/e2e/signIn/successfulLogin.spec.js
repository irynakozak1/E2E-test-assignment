import { test, expect } from '@playwright/test';
import LoginPage from '../../../src/pageObjects/LoginPage/LoginPage.js';
import USERS from '../../../src/data/users.js';

test.describe('Sign In', () => {
  let loginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('User should be able to sign in', async ({ page }) => {
    await loginPage.usernameInput.fill(USERS.TEST_USER.email);
    await loginPage.passwordInput.fill(USERS.TEST_USER.password);
    await loginPage.loginButton.click();

    await expect(page, 'User should be redirected to dashboard page')
      .toHaveURL(/.*\/systimaas7\/dashboard/, { timeout: 8000 });
  });

  test('User should not be able to sign in with invalid credentials', async () => {
    await loginPage.usernameInput.fill('invalidUser@systima.no');
    await loginPage.passwordInput.fill(USERS.TEST_USER.password);
    await loginPage.loginButton.click();

    await expect(loginPage.errorMessage, 'Error message should be displayed').toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Feil brukernavn / passord');
  });
});
