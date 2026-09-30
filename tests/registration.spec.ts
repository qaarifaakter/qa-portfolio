import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { registrationData } from '../test-data/registrationData';

test.describe('EventHub Registration', () => {

  test.beforeEach(async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.navigateToRegistrationPage();
    await registrationPage.openRegistrationForm();
  });

  test('TC-01: Register with valid information', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.register(
      registrationData.valid.email,
      registrationData.valid.password,
      registrationData.valid.confirmPassword
    );

    await expect(page).toHaveURL(
      'https://eventhub.rahulshettyacademy.com/'
    );
  });

  test('TC-02: Register with invalid email', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.register(
      registrationData.invalidEmail.email,
      registrationData.invalidEmail.password,
      registrationData.invalidEmail.confirmPassword
    );

    await expect(
      page.getByText('Enter a valid email')
    ).toBeVisible();
  });

  test('TC-03: Password less than 8 characters', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.register(
      registrationData.shortPassword.email,
      registrationData.shortPassword.password,
      registrationData.shortPassword.confirmPassword
    );

    await expect(
      page.getByText(/At least 8 characters/i)
    ).toBeVisible();
  });

  test('TC-04: Password without uppercase letter', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.register(
      registrationData.noUppercase.email,
      registrationData.noUppercase.password,
      registrationData.noUppercase.confirmPassword
    );

    await expect(
      page.getByText(/One uppercase letter/i)
    ).toBeVisible();
  });

  test('TC-05: Password without number', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.register(
      registrationData.noNumber.email,
      registrationData.noNumber.password,
      registrationData.noNumber.confirmPassword
    );

    await expect(
      page.getByText(/One number/i)
    ).toBeVisible();
  });

  test('TC-06: Password without special character', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.register(
      registrationData.noSpecialCharacter.email,
      registrationData.noSpecialCharacter.password,
      registrationData.noSpecialCharacter.confirmPassword
    );

    await expect(
      page.getByText(/One special character/i)
    ).toBeVisible();
  });

  test('TC-07: Register with mismatched passwords', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.register(
      registrationData.passwordMismatch.email,
      registrationData.passwordMismatch.password,
      registrationData.passwordMismatch.confirmPassword
    );

    await expect(
      page.getByText(/password.*match/i)
    ).toBeVisible();
  });

});
