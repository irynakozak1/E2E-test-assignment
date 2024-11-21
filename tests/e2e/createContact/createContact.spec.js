import { expect, test } from '../../../src/fixtures/dashboardPage.js';

test.describe('Contact creation', () => {
  let contactsPage;
  let createContactPopup;

  test.beforeEach(async ({ dashboardPage }) => {
    contactsPage = await dashboardPage.openContactsPage();
    createContactPopup = await contactsPage.openCreateContactPopup();
  });

  test('Empty Name field validation - contact creation should fail', async () => {
    await createContactPopup.createContactButton.click();
    await expect(createContactPopup.emptyNameValidationMessage).toHaveText('Vennligst skriv inn navn');
    await expect(createContactPopup.emptyNameValidationMessage).toHaveCSS('color', 'rgb(255, 82, 82)');
  });

  test('User should be able to create contact', async () => {
    await createContactPopup.nameInput.fill('Test');
    await createContactPopup.createContactButton.click();
    await expect(contactsPage.newContactSuccessMessage).toBeVisible();
    await expect(contactsPage.newContactSuccessMessage).toHaveCSS('background-color', 'rgb(76, 175, 80)');
    await expect(contactsPage.newContactSuccessMessage).toContainText('Ny kontakt lagret.');
  });
});
