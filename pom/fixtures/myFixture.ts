import {test as base} from '@playwright/test'
import { HomePage } from '../page/homePage'
import { LoginPage } from '../page/loginPage'
import { QuestionsPage } from '../page/questionsPage' 

type MyFixtures = {
    homePage: HomePage,
    loginPage: LoginPage,
    questionsPage: QuestionsPage
}

export const test = base.extend<MyFixtures>({
    loginPage:async ({page}, use) => {
        await use(new LoginPage(page))
        
    },

    homePage:async ({page}, use) => {
        await use(new HomePage(page))
        
    },
    questionsPage:async ({page}, use) => {
        await use(new QuestionsPage(page))
        
    }
})

export { expect } from '@playwright/test';

