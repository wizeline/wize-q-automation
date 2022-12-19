import { test, expect } from '@playwright/test';
import {LoginPage} from '../page/loginPage'
import {HomePage} from '../page/homePage'
import {CREDENTIALS, LOCATIONS,DEPARTMENT,USERS} from '../data/Constants'
import { QuestionsPage } from '../page/questionsPage';


test.describe('Tasks creation Suite', () => {
  //test.use({ storageState: 'auth.json' });
  let loginPage;
  let homePage;
  let questionsPage;
  
  
  test.beforeEach(async ({ page }) => {
   await page.goto("https://questions-develop.wizeline.com/")
   loginPage = new LoginPage(page);
   homePage = new HomePage(page);  
   questionsPage = new QuestionsPage(page);
   await loginPage.login(CREDENTIALS.EMAIL,CREDENTIALS.PASSWORD)
    })

test('Ask new question with location', async ({ page }) => {
  await questionsPage.askQuestion(USERS.STANDAR, DEPARTMENT.IDK,LOCATIONS.GDL)
  await expect(homePage.alert).toHaveText(("Question has been created succesfully!"))
})

test('Ask new Anonymous question with location', async ({ page }) => {
  await questionsPage.askQuestion(USERS.ANONYMOUS, DEPARTMENT.IDK,LOCATIONS.GDL)
  await expect(homePage.alert).toHaveText(("Question has been created succesfully!"))
})

})
