import { expect, Locator, Page } from '@playwright/test';
import { HomePage } from './homePage';
import { QUESTIONS } from '../data/Constants';


export class QuestionsPage {
  readonly page: Page;
  readonly questionInput: Locator;
  readonly locationDropdown: Locator;
  readonly locationOption: Locator;
  readonly departmentDropdown: Locator;
  readonly askBtn: Locator;
  readonly homePage: HomePage;



  constructor(page: Page) {
    this.page = page;
    this.questionInput = page.getByRole("textbox")
    this.locationDropdown = page.getByText("Location")
    this.departmentDropdown = page.locator("#department-dropdown-btn")
    this.askBtn = page.locator("#submit-btn")
    this.homePage = new HomePage(page)

    
  }

 async askQuestion(user,department,location) {
    await this.homePage.acceptBtn.click()
    await this.homePage.askBtn.click()
    await this.questionInput.type("This is a test question...??")
    await this.locationDropdown.click()
    await this.page.getByRole("menuitem",{name:`${location}`}).click()
    await this.departmentDropdown.click()
    await this.page.getByRole("menuitem",{name:`${department}`}).click()
    if(user=="Anonymous"){
    await this.page.locator('label span').click();
      }
    await this.askBtn.click()
    await this.page.getByRole("button",{name:'Submit'}).click()

 }


 async validateQuestion(user,question,location){
   await expect(this.homePage.questions
        .filter({ hasText: `${QUESTIONS.TIME}` })
        .filter({has: this.page.getByRole('link',{ name: `${user}` })})
        .filter({has: this.page.getByRole('link',{ name: `${question}` })})
        .filter({has: this.page.getByText(`${location}`)})
        ).toBeVisible()
          return true
      
 }

}