import { expect, Locator, Page } from '@playwright/test';


export class HomePage {
  readonly page: Page;
  readonly alert: Locator;
  readonly askBtn: Locator;
  readonly acceptBtn: Locator;
  readonly questions: Locator;



  constructor(page: Page) {
    this.page = page;
    this.alert = page.getByRole("alert")
    this.askBtn = page.getByRole("link",{name:"Ask Question"})
    this.acceptBtn = page.getByRole("button",{name:"Accept"})
    this.questions = page.getByRole('article')
    
  }


}