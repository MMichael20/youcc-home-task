import test from "@playwright/test";
import { ProfilePage } from "../../pages/ProfilePage";
import { readFile, writeFile } from "fs/promises";
import { generatePassword } from "../../utils/test.data";
import { LoginPage } from "../../pages/LoginPage";
import { log } from "console";

test("Verify correct error when password confirmation is different", async({page}) => {
    const filePath = 'data/data.json'
    const profilePage = new ProfilePage(page);
    await profilePage.goto()
    const data = JSON.parse(await readFile(filePath, 'utf8'));
    const newPassword = generatePassword()
    await profilePage.setCurrentPassword(data.password)
    await profilePage.setNewPassword(newPassword)
    await profilePage.setConfirmPassword('This is defenitely not the password')
    await profilePage.isErrorMessageVisible() 
})

test("Verify it updates the password correctly", async({page}) => {
    const filePath = 'data/data.json'
    const profilePage = new ProfilePage(page);
    await profilePage.goto()
    const data = JSON.parse(await readFile(filePath, 'utf8'));
    const newPassword = generatePassword()
    await profilePage.setCurrentPassword(data.password)
    await profilePage.setNewPassword(newPassword)
    await profilePage.setConfirmPassword(newPassword)
    await profilePage.clickSave()
    await profilePage.isSaveMessageVisible()
    data.password = newPassword;
    
    await writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
})

test("Verify successfull login with new password", async({page}) =>{
    const filePath = 'data/data.json'
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const data = JSON.parse(await readFile(filePath, 'utf8'));
    await loginPage.fillUsername(data.username);
    await loginPage.fillPassword(data.password);
    await loginPage.clickLogin();
})