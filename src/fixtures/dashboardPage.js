// eslint-disable-next-line import/no-extraneous-dependencies
import { expect as baseExpect, test as base } from '@playwright/test';
import TEST_USER_STORAGE_STATE_PATH from '../constants.js';
import DashboardPage from '../pageObjects/DashboardPage/DashboardPage.js';

export const test = base.extend({
  dashboardPage: async ({ browser }, use) => {
    const ctx = await browser.newContext({
      storageState: TEST_USER_STORAGE_STATE_PATH,
    });

    const page = await ctx.newPage();
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.navigate();

    await use(dashboardPage);
  },
});

/** @type {import('@playwright/test')} */
export const expect = baseExpect;
