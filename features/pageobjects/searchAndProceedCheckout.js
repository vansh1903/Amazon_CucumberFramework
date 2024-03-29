const { $ } = require('@wdio/globals')
const Page = require('../pageobjects/page');
const ActionHelper = require("../helper/actionHelper")


/**
 * sub page containing specific selectors and methods for a specific page
 */
class searchAndProceedCheckout extends Page {
    /**
     * define selectors using getter methods
     */
    elements= {
        searchBox:"#twotabsearchtextbox",
        serchClick:'#nav-search-submit-button',
        checkProductList:".puisg-col-inner h2 span",
        addToCart:'#desktop_qualifiedBuyBox #add-to-cart-button',
        proceed:'#attach-sidesheet-checkout-button',
        email:'input#ap_email',
        emailButton:'input#continue',
        passwordButton:'#signInSubmit'
    }

    get searchAmazonInput () {
        return this.elements.searchBox;
    }

    get searchButton () {
        return this.elements.serchClick;
    }
    get verifyAllProductSearch () {
        return $$(this.elements.checkProductList);
    }
    get addToCart() {
        return this.elements.addToCart;
    }
    get proceedToCheckout() {
        return this.elements.proceed;
    }
    get userEmail(){
        return this.elements.email;
    }
    get userEmailButton(){
        return this.elements.emailButton
    }
    get userPasswordButton(){
        return this.elements.passwordButton
    }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async searchBar(product) {
        await ActionHelper.maximizeWindow();
        await ActionHelper.setValue(this.searchAmazonInput, product);
        await ActionHelper.pause(2000);
    }

    async searchButtonClick(){
        await ActionHelper.click(this.searchButton);
    }

    async checkName(product){
        const items = await (this.verifyAllProductSearch);
        
        for (const item of items ){
            const name = await ActionHelper.getText(item);
            // await expect(name.includes(product)).to.be.true;
        }
    }

    async itemSelect(){
        var buyItem = await (this.verifyAllProductSearch);
        const Item = buyItem[0]
        console.log(await ActionHelper.getText(Item))
        await ActionHelper.click(Item);

        await ActionHelper.maximizeWindow();
        let windows = await ActionHelper.getWindowHandles();
        await ActionHelper.switchToWindow(windows[windows.length-1]);
    }

    async addToCartClick(){
        await ActionHelper.click(this.addToCart);
        await ActionHelper.pause(5000);
    }
    async proceedToCheckoutClick(){
        await ActionHelper.click(this.proceedToCheckout);
        await ActionHelper.pause(2000);
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
        ActionHelper.pause(10000);
        await ActionHelper.click(this.userPasswordButton);
        ActionHelper.pause(5000);        
    }
  


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new searchAndProceedCheckout();
