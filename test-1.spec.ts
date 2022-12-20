import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://questions-develop.wizeline.com/login');
  await page.getByRole('button', { name: 'Log in with your Wizeline account' }).click();
});