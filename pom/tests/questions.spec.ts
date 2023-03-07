import { test, expect } from '../fixtures/myFixture';
import {CREDENTIALS, LOCATIONS,DEPARTMENT,USERS,MESSAGES,QUESTIONS,PEOPLE} from '../data/Constants'
  
  test.beforeEach(async ({loginPage}) => {
   await loginPage.login(CREDENTIALS.EMAIL,CREDENTIALS.PASSWORD)
    })

test('Ask new question with location', async ({questionsPage,homePage}) => {
  await questionsPage.askQuestion(USERS.STANDAR, DEPARTMENT.ACADEMY,LOCATIONS.GDL,PEOPLE.NA)
  await expect(questionsPage.validateQuestion(QUESTIONS.USER_NAME,QUESTIONS.QUESTION_TEST,LOCATIONS.GDL)).toBeTruthy()
  await expect(homePage.alert).toContainText((MESSAGES.QUESTION_CREATED))
})

test('Ask new Anonymous question with location', async ({questionsPage,homePage}) => {
  await questionsPage.askQuestion(USERS.ANONYMOUS, DEPARTMENT.ACADEMY,LOCATIONS.GDL,PEOPLE.ACADEMY)
  await expect(questionsPage.validateAnonymousQuestion(USERS.ANONYMOUS,QUESTIONS.QUESTION_TEST,LOCATIONS.GDL,DEPARTMENT.ACADEMY)).toBeTruthy()
  await expect(homePage.alert).toContainText((MESSAGES.ANON_QUESTION_CREATED))
})