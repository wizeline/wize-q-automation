import test, { expect, Locator, Page } from '@playwright/test';
import { HomePage } from './homePage';
import { QUESTIONS, TEXTS } from '../data/Constants';


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
    this.departmentDropdown = page.getByText("Deparment")
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
        .filter({has: this.page.getByText(`${location}`)}).first()
        ).toBeVisible()
          return true
      
 }

 async validateQuestionDetails(question,location,department){
  await expect(this.page.getByText(TEXTS.Q_DETAILS_TEXT)).toBeVisible()
  await expect(this.page.getByText(location)).toBeVisible()
  await expect(this.page.getByText(department)).toBeVisible()
  await expect( this.page.getByText(question)).toBeVisible()
  return true
 }


}