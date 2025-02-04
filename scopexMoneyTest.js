const assert = require('assert');

describe('Scopex Money App Test', () => {
  it('should login with registered user', async () => {
    const usernameField = await $('id=username_field');  
    const passwordField = await $('id=password_field');  
    const loginButton = await $('id=login_button');      

    await usernameField.setValue('your_username');  
    await passwordField.setValue('your_password');  
    await browser.saveScreenshot('./screenshots/before_login.png');
    await loginButton.click();

    const homeScreenElement = await $('id=home_screen');  
    await homeScreenElement.waitForDisplayed();
    assert.strictEqual(await homeScreenElement.isDisplayed(), true);
    await browser.saveScreenshot('./screenshots/after_login.png');
  });

  it('should add a recipient', async () => {
    const addRecipientButton = await $('id=add_recipient_button');  
    await addRecipientButton.click();

    const recipientNameField = await $('id=recipient_name_field');  
    const recipientAccountField = await $('id=recipient_account_field');  
    const saveRecipientButton = await $('id=save_recipient_button');  

    await recipientNameField.setValue('ABC DEF');  
    await recipientAccountField.setValue('AJ987654321'); 
    await browser.saveScreenshot('./screenshots/before_adding_recipient.png');
    await saveRecipientButton.click();

    const recipientListItem = await $('id=recipient_list_item');  
    await recipientListItem.waitForDisplayed();
    assert.strictEqual(await recipientListItem.isDisplayed(), true);
    await browser.saveScreenshot('./screenshots/after_adding_recipient.png');
  });

  it('should logout', async () => {
    const profileButton = await $('id=profile_button');  
    await profileButton.click();

    const logoutButton = await $('id=logout_button');  
    await browser.saveScreenshot('./screenshots/before_logout.png');
    await logoutButton.click();

    const loginButton = await $('id=login_button');
    await loginButton.waitForDisplayed();
    assert.strictEqual(await loginButton.isDisplayed(), true);
    await browser.saveScreenshot('./screenshots/after_logout.png');
  });
});
