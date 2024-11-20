import BasePage from '../BasePage.js';

export default class PurchasePage extends BasePage {
  constructor(page) {
    super(page, '/systimaas7/bookkeeping/purchase');

    this.selectContactDropdown = page.getByLabel('Kontakt (valgfri ved kvittering)');
    this.contactItem = page.locator('.v-list-item').getByText('Systima AS');
    this.amountInput = page.getByLabel('Totalt beløp inkl. mva. *');
    this.invoiceDateInput = page.getByLabel('Fakturadato *');
    this.dueDateInput = page.getByLabel('Forfallsdato');
    this.accountDropdown = page.getByRole('textbox', { name: 'Konto *' });
    this.accountItem = page.locator('.v-list-item__title').getByText('1000 Utvikling, ervervet');
    this.bookButton = page.getByRole('button', { name: 'Bokfør', exact: true });
    this.newPurchaseSuccessMessage = page.locator('.success');
    this.invoiceAmountWithVatInput = page
      .getByRole('cell', { name: 'Beløp inkl. mva. *' })
      .getByLabel('Beløp inkl. mva. *');
    this.vatCodeInput = page.getByRole('textbox', { name: 'Mva. kode *' });
    this.paymentAmountWithVatInput = page.locator('.v-text-field').getByText('Beløp inkl. mva. *').nth(2);
    this.paymentDate = page.getByLabel('Betalingsdato *');
    this.invoiceNumber = page.getByLabel('Fakturanr.');
    this.invoiceNumberValidationMessage = page.getByRole('alert').locator('.v-messages__message');
  }
}
