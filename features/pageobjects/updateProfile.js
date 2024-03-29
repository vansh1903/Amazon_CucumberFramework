const { $ } = require('@wdio/globals');
const Page = require('./page');
const assert = require('assert');
const ActionHelper = require('../helper/actionHelper')

class update extends Page {


  elements ={
    signInHeader:'#nav-link-accountList',
    infoPage:'[data-card-identifier="SignInAndSecurity"] [class="a-row"]',
    fillEmail:'input#ap_email',
    emailButton:'#continue',
    passwordButton:'#signInSubmit',
    editButton:'[aria-label="Edit name"]',
    fillNameBox:'#ap_customer_name',
    saveChangesButton:'#cnep_1C_submit_button',
    verifyChange:'[id="SUCCESS_MESSAGES"] [class="a-alert-content"]'
  }
  get signIn(){
    return this.elements.signInHeader;
  }
  get userInfo(){
    return this.elements.infoPage
  }
  get userEmail(){
    return this.elements.fillEmail
  }
  get userEmailButton(){
    return this.elements.emailButton
  }
  get userPasswordButton(){
    return this.elements.passwordButton
  }
  get editNameButton(){
    return this.elements.editButton
  }
  get nameBox(){
    return this.elements.fillNameBox
  }
  get saveChanges(){
    return this.elements.saveChangesButton
  }
  get checkChange(){
    return this.elements.verifyChange
  }

  async goToSignIn(){
    browser.maximizeWindow();
    await ActionHelper.click(this.signIn);
  }
  async loginEmail(email){
    await ActionHelper.setValue(this.userEmail, email)
    ActionHelper.pause(2000);
  }
  async emailButton(){
    await ActionHelper.click(this.userEmailButton);
    ActionHelper.pause(2000);
  }
  async passwordButton(){
    await ActionHelper.pause(20000);
    await ActionHelper.click(this.userPasswordButton);
    ActionHelper.pause(5000);
  }
  async goToUserInfo(){
    await ActionHelper.click(this.userInfo);
  }
  async editName(){
    await ActionHelper.click(this.editNameButton);
  }
  async clearName(){
    await ActionHelper.clearValue(this.nameBox);
  }
  async fillName(name){
    await ActionHelper.setValue(this.nameBox, name);
    await ActionHelper.click(this.saveChanges);
  }
  async assertNameChange(){
    const message = await ActionHelper.getText(this.checkChange)
        try {
          assert.strictEqual(message, "Name updated." , 'Name is not updated');
          console.log('Assertion passed: Name is updated');
        } catch (error) {
          console.error('Assertion failed:', error.message);
        }
  }

  open(){
    return super.open('update');
  }

}
module.exports = new update();