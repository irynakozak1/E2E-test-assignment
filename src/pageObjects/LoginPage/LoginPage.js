import BasePage from '../BasePage.js';

export default class LoginPage extends BasePage {
  constructor(page) {
    super(page, '/login');
    this.usernameInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.error-wrapper');
  }
}
