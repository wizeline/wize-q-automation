import { test, expect } from '../fixtures/myFixture';
import {CREDENTIALS, LOCATIONS,DEPARTMENT,USERS,MESSAGES,QUESTIONS} from '../data/Constants'
  
  test.beforeEach(async ({loginPage}) => {
   await loginPage.login(CREDENTIALS.EMAIL,CREDENTIALS.PASSWORD)

    })

test('Ask new question with location', async ({questionsPage,homePage}) => {
  await questionsPage.askQuestion(USERS.STANDAR, DEPARTMENT.IDK,LOCATIONS.GDL)
  await expect(questionsPage.validateQuestion(QUESTIONS.USER_NAME,QUESTIONS.QUESTION_TEST,LOCATIONS.GDL)).toBeTruthy()
  await expect(homePage.alert).toHaveText((MESSAGES.QUESTION_CREATED))
})

test('Ask new Anonymous question with location', async ({questionsPage,homePage}) => {
  await questionsPage.askQuestion(USERS.ANONYMOUS, DEPARTMENT.IDK,LOCATIONS.GDL)
  await expect(questionsPage.validateQuestion(USERS.ANONYMOUS,QUESTIONS.QUESTION_TEST,LOCATIONS.GDL)).toBeTruthy()
  await expect(homePage.alert).toHaveText((MESSAGES.QUESTION_CREATED))
})