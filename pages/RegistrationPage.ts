import { Page, Locator } from '@playwright/test';

export class RegistrationPage {
  readonly page: Page;
  readonly registerButton: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.registerButton = page.getByTestId('register-btn');
    this.emailInput = page.getByTestId('register-email');
    this.passwordInput = page.getByTestId('register-password');
    this.confirmPasswordInput = page.getByPlaceholder(
      'Repeat your password'
    );
    this.createAccountButton = page.getByRole('button', {
      name: 'Create Account'
    });
  }

  async navigateToRegistrationPage() {
    await this.page.goto(
      'https://eventhub.rahulshettyacademy.com/register'
    );
  }

  async openRegistrationForm() {
    await this.registerButton.click();
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async enterConfirmPassword(password: string) {
    await this.confirmPasswordInput.fill(password);
  }

  async submitRegistration() {
    await this.createAccountButton.click();
  }

  async register(
    email: string,
    password: string,
    confirmPassword: string
  ) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.enterConfirmPassword(confirmPassword);
    await this.submitRegistration();
  }
}
