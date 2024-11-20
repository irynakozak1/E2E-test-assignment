import { expect, test } from '../../../src/fixtures/dashboardPage.js';

test.describe('Purchase creation', async () => {
  let createPurchaseForm;
  let year;

  test.beforeEach(async ({ dashboardPage }) => {
    year = '2024';
    createPurchaseForm = await dashboardPage.openCreatePurchaseForm();

    await createPurchaseForm.selectContactDropdown.click();
    await createPurchaseForm.contactItem.click();
    await createPurchaseForm.amountInput.fill('100');
    await createPurchaseForm.invoiceDateInput.fill(`01.01.${year}`);
    await createPurchaseForm.dueDateInput.fill(`15.01.${year}`);
    await createPurchaseForm.accountDropdown.click();
    await createPurchaseForm.accountItem.click();
  });

  test('User should be able to book purchase', async () => {
    await createPurchaseForm.bookButton.click();

    await expect(createPurchaseForm.newPurchaseSuccessMessage).toBeVisible({ timeout: 8000 });
    await expect(createPurchaseForm.newPurchaseSuccessMessage)
      .toHaveCSS('background-color', 'rgb(76, 175, 80)');
    await expect(createPurchaseForm.newPurchaseSuccessMessage)
      .toContainText(`Bilag opprettet med bilagsnr. ${year}-`);
    await expect(createPurchaseForm.selectContactDropdown).toHaveValue('');
    await expect(createPurchaseForm.amountInput).toHaveValue('');
    await expect(createPurchaseForm.invoiceDateInput).toHaveValue('');
    await expect(createPurchaseForm.dueDateInput).toHaveValue('');
    await expect(createPurchaseForm.accountDropdown).toHaveValue('');
    await expect(createPurchaseForm.invoiceAmountWithVatInput).toHaveValue('0');
    await expect(createPurchaseForm.vatCodeInput).toHaveValue('');
    await expect(createPurchaseForm.paymentAmountWithVatInput).toHaveValue('');
    await expect(createPurchaseForm.paymentDate).toHaveValue('');
  });

  test('Duplicate Invoice Number validation', async () => {
    await createPurchaseForm.invoiceNumber.fill('1');
    await createPurchaseForm.bookButton.click();

    await expect(createPurchaseForm.invoiceNumberValidationMessage).toBeVisible();
    await expect(createPurchaseForm.invoiceNumberValidationMessage)
      .toHaveCSS('color', 'rgb(255, 82, 82)');
    await expect(createPurchaseForm.invoiceNumberValidationMessage)
      .toContainText(` Fakturanr. er allerede bokført ${year}-`);
    await expect(createPurchaseForm.amountInput).toHaveValue('100');
    await expect(createPurchaseForm.invoiceDateInput).toHaveValue(`01.01.${year}`);
    await expect(createPurchaseForm.dueDateInput).toHaveValue(`15.01.${year}`);
    await expect(createPurchaseForm.accountItem).toHaveText('1000 Utvikling, ervervet');
    await expect(createPurchaseForm.invoiceAmountWithVatInput).toHaveValue('100');
    await expect(createPurchaseForm.paymentAmountWithVatInput).toHaveValue('100');
    await expect(createPurchaseForm.paymentDate).toHaveValue(`15.01.${year}`);
  });
});
