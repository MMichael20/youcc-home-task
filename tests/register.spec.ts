import {test} from '@playwright/test'
import { RegisterPage } from '../pages/RegisterPage'
import {generateUser} from '../utils/test.data'

test.use({ storageState: undefined });

test('user registering with the correct credentials', async ({page}) => {
    const registerPage = new RegisterPage(page)
    const user = generateUser()
    await registerPage.goto()
    await registerPage.fillUsername(user.username)
    await registerPage.fillFirstName(user.firstName)
    await registerPage.fillLastName(user.lastName)
    await registerPage.fillPassword(user.password)
    await registerPage.fillConfirmPassword(user.password)
    await registerPage.submit()
    await registerPage.expectSuccessMessage()
})

test('user registering with the incorrect credentials', async ({page}) => {
    const registerPage = new RegisterPage(page)
    const user = generateUser()
    await registerPage.goto()
    await registerPage.fillUsername(user.username)
    await registerPage.fillFirstName(user.firstName)
    await registerPage.fillLastName(user.lastName)
    await registerPage.fillPassword("Not the password at all")
    await registerPage.fillConfirmPassword(user.password)
    await registerPage.expectMismatchError()
})