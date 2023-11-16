// import { Given, When, Then } from '@wdio/cucumber-framework';
// import * as assertionsss from '@wdio-ui/checkoutPage/checkoutPage.assertions';
// import * as tasksss from '@wdio-ui/checkoutPage/checkoutPage.tasks';
// import * as locatorsss from '@wdio-ui/checkoutPage/checkoutPage.locators';

// Given ('while user is on cart page and clicks payment button', async () => {
//     await browser.url(`https://weathershopper.pythonanywhere.com/moisturizer`);
//     (await locatorsss.hardAloe).waitForDisplayed();
//     await tasksss.click(locatorsss.hardAloe);
//     (await locatorsss.cartButton).waitForDisplayed();
//     await tasksss.click(await locatorsss.cartButton);
//     await tasksss.click(locatorsss.paymentButton);
// })
// When  ('User switches to iframe to enter details', async () => {
//     await tasksss.switchToIframe();
//     //await tasks.writingInFields();
//     await tasksss.email();
//     browser.pause(3000);
//     await tasksss.cardNo();
//     browser.pause(3000);
//     await tasksss.expiry();
//     browser.pause(3000);
//     await tasksss.CVC();
//     browser.pause(3000);
//     await tasksss.codeAndClick();
//     browser.pause(3000);
//     //await tasks.click(await locators.confirmPaymentButton);
// })
// Then  ('User clicks the pay button and exits iframe', async () => {
//     await assertionsss.headlineCheck();
// })