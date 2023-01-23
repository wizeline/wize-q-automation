import { test } from '../fixtures/myFixture';
import {CREDENTIALS, LOCATIONS,DEPARTMENT,QUESTIONS} from '../data/Constants'

test.beforeEach(async ({loginPage}) => {
    await loginPage.login(CREDENTIALS.EMAIL,CREDENTIALS.PASSWORD)
     })

     test('As a user i should be able to search a question', async ({ homePage,questionsPage }) => {
       await homePage.searchQuestion(QUESTIONS.QUESTION_TEST)
       await questionsPage.validateQuestionDetails(QUESTIONS.QUESTION_TEST,LOCATIONS.GDL,DEPARTMENT.ACADEMY)
      
     })
     