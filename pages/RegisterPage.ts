import { Page, expect } from '@playwright/test'
import { AppConfig } from '../config/app.config'

export class RegisterPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(AppConfig.baseUrl) 
    await this.page.getByRole('link', { name: 'Register' }).click()
  }

  async fillUsername(username: string) {
    await this.page.getByLabel('Login').fill(username)
  }

  async fillFirstName(firstName: string) {
    await this.page.getByLabel('First Name').fill(firstName)
  }

  async fillLastName(lastName: string) {
    await this.page.getByLabel('Last Name').fill(lastName)
  }

  async fillPassword(password: string) {
    await this.page.getByRole('textbox', { name: 'Password', exact: true }).fill(password)
  }

  async fillConfirmPassword(password: string) {
    await this.page.getByRole('textbox', { name: 'Confirm Password', exact: true }).fill(password)
  }

  async submit() {
    await this.page.getByRole('button', { name: 'Register' }).click()
  }

  async register(username: string, firstName: string, lastName: string, password: string) {
    await this.fillUsername(username)
    await this.fillFirstName(firstName)
    await this.fillLastName(lastName)
    await this.fillPassword(password)
    await this.fillConfirmPassword(password)
    await this.submit()
  }

  async expectSuccessMessage() {
    await expect(this.page.getByText('Registration is successful')).toBeVisible()
  }

  async expectPasswordError() {
    await expect(this.page.getByText('InvalidPasswordException')).toBeVisible()
  }

  async expectMismatchError() {
    await expect(this.page.getByText('Passwords do not match')).toBeVisible()
  }
}
