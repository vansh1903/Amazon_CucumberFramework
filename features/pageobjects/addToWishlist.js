const { $ } = require('@wdio/globals');
const Page = require('./page');
const ActionHelper = require('../helper/actionHelper')

class wishlist extends Page {

  elements = {
    searchBox:'#twotabsearchtextbox',
    searchButton:'#nav-search-submit-button',
    firstSearchedItem:'//*[@data-component-type="s-search-result"][1]',
    emailBox:'#ap_email',
    emailConfirmButton:'input#continue',
    passwordConfirmButton:'#signInSubmit',
    wishlistButton:'#wishListMainButton',
    confirmWishlistMessage:'(//*[@id="WLHUC_result"]//*[@class="a-size-medium-plus huc-atwl-header-main"])[1]',
    deleteItemInWishlist:'[name="submit.deleteItem"]',
    deleteMessage:'#g-items [class="a-alert-content"]',
    viewYourWishlist:'#huc-atwl-asin-button-group .a-button-inner'
  }

  get searchAmazonInput () {
    return this.elements.searchBox;
  }
  get searchButton () {
    return this.elements.searchButton;
  }
  get searchedItems() {
    return this.elements.firstSearchedItem;
  }
  get userEmail(){
    return this.elements.emailBox
  }
  get userEmailButton(){
    return this.elements.emailConfirmButton
  }
  get userPasswordButton(){
    return this.elements.passwordConfirmButton
  }
  get wishlistButton(){
    return this.elements.wishlistButton
  }
  get confirmationWishlistMessage(){
    return this.elements.confirmWishlistMessage
  }
  get deleteFromWishlist(){
    return this.elements.deleteItemInWishlist
  }
  get confirmDelete(){
    return this.elements.deleteMessage
  }

  get viewWishlist(){
    return this.elements.viewYourWishlist
  }
  

  
  async searchBar (product) {
    await ActionHelper.maximizeWindow();
    await ActionHelper.setValue(this.searchAmazonInput, product);
    await ActionHelper.pause(2000);
  }

  async searchButtonClick(){
    await ActionHelper.click(this.searchButton);
  }

  async putItemsInWishlist() {

    await ActionHelper.click(this.searchedItems);

    let windows = await ActionHelper.getWindowHandles();
    await ActionHelper.switchToWindow(windows[windows.length-1]);
  }

  async addToWishlist(){
    await ActionHelper.click(this.wishlistButton);
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

  async viewList(){
    await ActionHelper.click(this.viewWishlist);
  }

  async deleteItem(){
    await ActionHelper.click(this.deleteFromWishlist);
    ActionHelper.pause(2000);
  }
  async deleteCheck(){
    if((await this.confirmDelete)=="Deleted"){
      console.log("Item Deleted Successfully");
    }
    else{
      console.log("Error------------------");
    }
  }

  async confirmAddToWishlist(){
    const confirmWishlist = await ActionHelper.getText(this.confirmationWishlistMessage)
    await console.log(confirmWishlist);
  }

  open () {
    return super.open('wishlist');
  }
}

module.exports = new wishlist();