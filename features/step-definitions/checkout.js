const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const checkout = require('../pageobjects/searchAndProceedCheckout.js');
const actionHelper = require('../helper/actionHelper.js')

const product = "iPhone"
const email = "vanshsonavane@gmail.com";

Given(/^I am on the home page of Amazon$/,async () => {
	await checkout.open();
});

When(/^I search a product on Amazon$/,async () => {
	await checkout.searchBar(product);
	await checkout.searchButtonClick();
});

Then(/^I check that all the items in search list are according to what I searched$/,async () => {
	await checkout.checkName(product);
});

When(/^I select the first item$/,async () => {
	await checkout.itemSelect();
});

When(/^I add that product to cart$/,async () => {
	await checkout.addToCartClick();
});

When(/^I Proceed to Checkout$/,async () => {
	await checkout.proceedToCheckoutClick();
});

Then(/^I should be able to Login to my Amazon Account$/,async () => {
	await checkout.loginEmail(email);
	await checkout.emailButton();
	await checkout.passwordButton();
	await actionHelper.pause(20000);
});
