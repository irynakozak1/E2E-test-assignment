import BasePage from '../BasePage.js';
import PurchasePage from '../PurchasePage/PurchasePage.js';
import ContactsPage from '../ContactsPage/ContactsPage.js';

export default class DashboardPage extends BasePage {
  constructor(page) {
    super(page, '/systimaas7/dashboard');
    this.container = page.locator('.v-navigation-drawer');

    this.bookkeepingDropdown = this.container.getByText('Bokføring');
    this.purchaseItem = this.container.getByText('Bokfør andre filer');
    this.contactsItem = this.container.getByText('Kontakter');
  }

  async openCreatePurchaseForm() {
    await this.bookkeepingDropdown.click();
    await this.purchaseItem.click();
    return new PurchasePage(this._page);
  }

  async openContactsPage() {
    await this.contactsItem.click();
    return new ContactsPage(this._page);
  }
}
