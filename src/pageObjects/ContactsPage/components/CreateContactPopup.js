import BaseComponents from '../../../components/BaseComponents.js';

export default class CreateContactPopup extends BaseComponents {
  constructor(page) {
    super(page);

    this.container = page.locator('.v-dialog.v-dialog--active');
    this.createContactButton = page.locator('button[type="submit"]');
    this.emptyNameValidationMessage = page.locator('.v-input [role="alert"]');
    this.nameInput = page.getByLabel('Navn *');
  }
}
