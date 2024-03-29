const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const update = require('../pageobjects/updateProfile.js');
const actionHelper = require('../helper/actionHelper.js')

const name = "Vansh";
const email = "vanshsonavane@gmail.com"

Given(/^I am on the home page of Amazon$/,async () => {
  await update.open();
});

When(/^I navigate to Sign In page$/,async () => {
	await update.goToSignIn();
});

When(/^I should be able to Login to my Amazon Account$/,async () => {
  await update.loginEmail(email);
  await update.emailButton();
  await update.passwordButton();
});

When(/^I go to User information$/,async () => {
  await update.goToSignIn();
  await update.goToUserInfo();
});

When(/^I go to edit name$/,async () => {
  await update.editName();
});

When(/^I edit my name$/,async () => {
  await update.clearName();
  await update.fillName(name);
});

Then(/^I check that my name is edited or not$/,async () => {
  await update.assertNameChange();
  await actionHelper.pause(20000)
});
