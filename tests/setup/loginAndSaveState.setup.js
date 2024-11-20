import { expect, test as setup } from '@playwright/test';
import LoginPage from '../../src/pageObjects/LoginPage/LoginPage.js';
import TEST_USER_STORAGE_STATE_PATH from '../../src/constants.js';
import USERS from '../../src/data/users.js';

setup.describe('Setup', () => {
  setup('Login and Save', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.usernameInput.fill(USERS.TEST_USER.email);
    await loginPage.passwordInput.fill(USERS.TEST_USER.password);
    await loginPage.loginButton.click();

    await expect(page).toHaveURL(/.*\/systimaas7\/dashboard/, { timeout: 8000 });

    await page.context().storageState({
      path: TEST_USER_STORAGE_STATE_PATH,
    });
  });
});
