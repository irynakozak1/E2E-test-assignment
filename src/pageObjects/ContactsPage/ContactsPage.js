import BasePage from '../BasePage.js';
import CreateContactPopup from './components/CreateContactPopup.js';

export default class ContactsPage extends BasePage {
  constructor(page) {
    super(page, '/systimaas7/contacts');

    this.newContactButton = page.getByRole('button', { name: 'Ny kontakt ' });
    this.newContactSuccessMessage = page.locator('.success');
  }

  async openCreateContactPopup() {
    await this.newContactButton.click();
    return new CreateContactPopup(this._page);
  }
}
