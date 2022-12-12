import { expect, Locator, Page } from '@playwright/test';
import { URLS } from '../data/Constants';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly askQBtn: Locator;
  readonly continueBtn: Locator;
  readonly erroMsg: Locator;




  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.locator('button', { hasText: 'Log in with your Wizeline account' })
    this.emailInput = page.getByLabel('Email address')
    this.passwordInput = page.getByLabel('Password')
    this.continueBtn = page.getByText('Continue',{ exact: true })
    this.askQBtn = page.locator('#ask-button')
    this.erroMsg = page.getByText('Wrong email or password')
  }


async login(email,password){
    await this.page.goto(URLS.LOGIN);
    await this.loginBtn.click()
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.continueBtn.click()
}

}