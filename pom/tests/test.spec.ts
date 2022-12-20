import { test, expect } from '@playwright/test';
import { CREDENTIALS,USERS,DEPARTMENT,LOCATIONS } from '../data/Constants';
import { HomePage } from '../page/homePage';
import { LoginPage } from '../page/loginPage';
import { QuestionsPage } from '../page/questionsPage';


test('getting question list', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const questionsPage = new QuestionsPage(page)
  await loginPage.login(CREDENTIALS.EMAIL,CREDENTIALS.PASSWORD)
//   await homePage.acceptBtn.click()
await questionsPage.askQuestion(USERS.STANDAR, DEPARTMENT.IDK,LOCATIONS.GDL)

    const questions = page.getByRole('article')
    await expect(questions
        .filter({ hasText: 'a few seconds ago' })
        .filter({has: page.getByRole('link',{ name: "This is a test question...??" })})
        ).toBeVisible()
    // await expect(questions.getByRole('link',{ name: 'undefined undefined a few seconds ago' })).toBeVisible()
    // await expect(questions.getByRole('link',{ name: "This is a test question...??" })).toBeVisible()
// await rowLocator
//   .filter({ hasText: 'Mary' })
//   .filter({ has: page.getByRole('button', { name: 'Say goodbye' }) })
    await page.pause()
})
