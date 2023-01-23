import { expect, Locator, Page } from '@playwright/test';
import { QUESTIONS } from '../data/Constants';


export class HomePage {
  readonly page: Page;
  readonly alert: Locator;
  readonly askBtn: Locator;
  readonly acceptBtn: Locator;
  readonly questions: Locator;
  readonly searchBar: Locator;
  readonly searchOption: Locator;



  constructor(page: Page) {
    this.page = page;
    this.alert = page.getByRole("alert")
    this.askBtn = page.getByRole("link",{name:"Ask Question"})
    this.acceptBtn = page.getByRole("button",{name:"Accept"})
    this.questions = page.getByRole('article')
    this.searchBar = page.getByPlaceholder('Search for…').first()
    this.searchOption = page.locator("#user-controls")
    
  }

 async searchQuestion(question) {
  await this.acceptBtn.click()
  await this.searchBar.fill(`${QUESTIONS.QUESTION_TEST}`)
  await this.searchOption.getByText(`${question}`).first().click()
  
 }


}