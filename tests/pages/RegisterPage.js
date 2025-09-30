class RegisterPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.submitBtn = page.locator('button[type=submit]');
    this.successMsg = page.locator('.success');
    this.errorMsg = page.locator('.error');
  }

  async goto() {
    await this.page.goto('/register.html');
  }

  async register(name, email, password) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitBtn.click();
  }
}

module.exports = { RegisterPage };
