const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const wishlist = require("../pageobjects/addToWishlist.js")
const actionHelper = require('../helper/actionHelper.js')

const product = "shoes";

Given(/^I am on the home page of Amazon Website$/,async () => {
    await searchAndProceedCheckout.open();
});

When(/^I search a product on Amazon$/,async () => {
    await wishlist.searchBar(product);
    await wishlist.searchButtonClick();
});

When(/^I add item to Wishlist$/,async () => {
    await wishlist.putItemsInWishlist();
    await wishlist.addToWishlist();
});

Then(/^I login to my Amazon Account$/,async () => {
    await wishlist.loginEmail(email);
    await wishlist.emailButton();
    await wishlist.passwordButton();
});

Then(/^I successfully add item in my wishlist$/,async () => {
    await wishlist.addToWishlist();
    await actionHelper.pause(2000);
});

Then(/^I check that the item is added or not$/,async () => {
    await wishlist.confirmAddToWishlist();
});

Then(/^I view the wishlist$/,async () => {
    await wishlist.viewList();
});

Then(/^I delete the item added to the wishlist$/,async () => {
    await wishlist.deleteItem();
});

Then(/^I check if the item is deleted or not$/,async () => {
    await wishlist.deleteCheck();
    await actionHelper.pause(20000);
});


