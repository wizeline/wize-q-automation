import { test, expect } from '@playwright/test';
import {LoginPage} from '../page/loginPage'
import {CREDENTIALS} from '../data/Constants'


test('login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.login(CREDENTIALS.EMAIL,CREDENTIALS.PASSWORD)
  await expect(loginPage.askQBtn).toBeVisible()

})

test('login with invalid email', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.login(CREDENTIALS.INVALID_EMAIL,CREDENTIALS.PASSWORD)
  await expect(loginPage.erroMsg).toBeVisible()

})

test('login with invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.login(CREDENTIALS.EMAIL,CREDENTIALS.INVALID_PASSWORD)
  await expect(loginPage.erroMsg).toBeVisible()

})

test('login with invalid Email & password', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.login(CREDENTIALS.INVALID_EMAIL,CREDENTIALS.INVALID_PASSWORD)
  await expect(loginPage.erroMsg).toBeVisible()

})