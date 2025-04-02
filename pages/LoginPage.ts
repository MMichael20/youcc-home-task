import {expect, Page} from '@playwright/test'
import {AppConfig} from '../config/app.config'

export class LoginPage{
    constructor(private page: Page){}

    async goto(){
        await this.page.goto(AppConfig.baseUrl) 
    }

    async fillUsername(username: string) {
        await this.page.getByPlaceholder('Login').fill(username);
    }
    
    async fillPassword(password: string) {
        await this.page.locator('input[name="password"]:not([id="password"])').fill(password);
    }
      
    
    async clickLogin() {
        await expect(this.page.getByRole('button', { name: 'Login' })).toBeVisible()
        await this.page.getByRole('button', { name: 'Login' }).click()
        await this.page.waitForSelector('text=Logout', { timeout: 10000 })
    }
    
    async expectLoginError() {
        await expect(this.page.getByText('Invalid username/password')).toBeVisible()
    }
}
