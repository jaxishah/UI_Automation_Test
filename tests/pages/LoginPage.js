class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginBtn = page.locator('button[type=submit]');
    this.errorMsg = page.locator('.error');
    this.logoutBtn = page.locator('#logout-btn');
  }

  async goto() {
    await this.page.goto('/login.html');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async logout() {
    await this.logoutBtn.click();
  }
}

module.exports = { LoginPage };
