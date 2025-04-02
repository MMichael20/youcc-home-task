import { Page } from "@playwright/test";
import { AppConfig } from "../config/app.config";

export class ProfilePage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto(AppConfig.baseUrl) 
        await this.page.getByRole('link', { name: 'Profile' }).click();
    }

    async getFirstName(): Promise<string> {
        return await this.page.getByRole('textbox', { name: 'First Name' }).inputValue();
    }
    
    async getLastName(): Promise<string> {
        return await this.page.getByRole('textbox', { name: 'Last Name' }).inputValue();
    }
    
    async getAge(): Promise<string> {
        return await this.page.getByRole('textbox', { name: 'Age' }).inputValue();
    }
    
    async getAddress(): Promise<string> {
        return await this.page.getByRole('textbox', { name: 'Address' }).inputValue();
    }
    
    async getPhone(): Promise<string> {
        return await this.page.getByRole('textbox', { name: 'Phone' }).inputValue();
    }

    async getHobby(): Promise<string> {
        return await this.page.getByLabel('Hobby').inputValue();
    }

    async setGender(gender: string) {
        await this.page.getByRole('combobox', { name: 'Gender' }).click();
        await this.page.getByRole('combobox', { name: 'Gender' }).fill(gender);
    }

    async setCurrentPassword(password: string) {
        await this.page.getByRole('textbox', { name: 'Current Password' }).click();
        await this.page.getByRole('textbox', { name: 'Current Password' }).fill(password);
    }

    async setNewPassword(password: string) {
        await this.page.getByRole('textbox', { name: 'New Pasword' }).click();
        await this.page.getByRole('textbox', { name: 'New Pasword' }).fill(password);
    }

    async setConfirmPassword(password: string) {
        await this.page.getByRole('textbox', { name: 'Confirm Password' }).click();
        await this.page.getByRole('textbox', { name: 'Confirm Password' }).fill(password);
    }

    async clickSave() {
        await this.page.locator('div').filter({ hasText: 'Save Cancel' }).nth(2).click();
        await this.page.getByRole('button', { name: 'Save' }).click();
    }

    async isSaveMessageVisible(): Promise<boolean> {
        return await this.page.getByText('The profile has been saved').first().isVisible();
    }
    
    async isErrorMessageVisible(): Promise<boolean> {
        return await this.page.getByText(' Passwords do not match ').first().isVisible();
    }
    
}
