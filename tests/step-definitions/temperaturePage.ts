import { Given, When, Then } from '@wdio/cucumber-framework';
import * as assertions from '@wdio-ui/temperaturePage/temperaturePage.assertions';
import * as tasks from '@wdio-ui/temperaturePage/temperaturePage.tasks';
import * as assertionsProduct from '@wdio-ui/productPage/productPage.assertions';
import * as tasksProduct from '@wdio-ui/productPage/productPage.tasks';
import * as assertionsCheckout from '@wdio-ui/checkoutPage/checkoutPage.assertions';
import * as tasksCheckout from '@wdio-ui/checkoutPage/checkoutPage.tasks';
import * as locatorsCheckout from '@wdio-ui/checkoutPage/checkoutPage.locators';
import * as tasksConfirmation from "@wdio-ui/confirmationPage/confirmationPage.tasks";
export var cheapestAloe
export var cheapestAlmond
export var cheapestSPF50
export var cheapestSPF30
var link = '';


Given("User is on temperature page", async() => {
    await browser.url(`https://weathershopper.pythonanywhere.com/`);
    await assertions.assertionOnLoginPages()
});

When  ("User reads temperature and selects the product", async() => {
    await tasks.readTemperatureAndClick();
})

Then  ('User should be on the product page', async () => {
    tasks.orAssertion("Moisturizers", "Sunscreens");
})

// Product page

Given ('User is on product page', async () => {
        link = await browser.getUrl();
    });
When  ('User selects the cheapest products', async () =>{
        await tasksProduct.selectAndClickCheapestProduct(link, cheapestAloe, cheapestAlmond, cheapestSPF50, cheapestSPF30);
});


When  ('User clicks the cart button', async () => {
    await assertionsProduct.cartButtonVisibility();
    await tasksProduct.clickCart();
});

Then  ('User verifies the selected products on checkout page', async () => {
    await assertionsProduct.urlCheck();
    await assertionsProduct.SumAssertions(cheapestAloe,cheapestAlmond,cheapestSPF30,cheapestSPF50);
});

// Checkout Page

Given ('while user is on checkout page and clicks payment button', async () => {
    await assertionsCheckout.itemCheck();
    await assertionsCheckout.urlCheck();
    await assertionsCheckout.headlineCheck();
    await tasksCheckout.click(locatorsCheckout.paymentButton);
})
When  ('User switches to iframe to enter details', async () => {
    await tasksCheckout.userDetails();
})
Then  ('User clicks the pay button and exits iframe', async () => {
     await tasksCheckout.confirmPayment();
})

// Confirmation Page

Given ('While user has already clicked on confirm payemt and is on confirmation page', async () => {

});
Then  ('User checks the status of payment', async () => {

    await tasksConfirmation.urlAndHeadingsCheck();
});