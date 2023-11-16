import * as locators from "@wdio-ui/checkoutPage/checkoutPage.locators";
import { CONNREFUSED } from "dns";
export async function click(element) {
    element.waitForDisplayed();
    element.click();
}

export async function switchToIframe()
{
    let frame = browser.$('//body/iframe[@class="stripe_checkout_app"]')
    //expect(frame).toExist()
    await browser.switchToFrame(await frame);
    browser.setTimeout({'implicit': 2000});
}

export async function email ()
{
    (await locators.email).waitForDisplayed();
    const emaill = 'hello@test.com';
    (await locators.email).click();
    await browser.keys(emaill);
    await browser.pause(2000)
    await browser.keys("Tab")
}
export async function cardNo (){
    await browser.pause(5000)
    const number = '4242 4242 4242 4242';
    await browser.pause(1000);
    (await locators.cardNumber).click();
    await browser.keys(number);
    await browser.pause(2000)
    await browser.keys("Tab")
}
export async function expiry (){
    (await locators.cardExpiry).waitForDisplayed();
    const expiry = '11/28';
    (await locators.cardExpiry).click();
    await browser.keys(expiry);
    await browser.pause(2000)
    await browser.keys("Tab")
}
export async function CVC (){
    (await locators.cardCvc).waitForDisplayed();
    const cvc = '654';
    (await locators.cardCvc).click();
    await browser.keys(cvc);
    await browser.pause(2000)
    await browser.keys("Tab")
}
export async function code (){
    (await locators.zipCode).waitForDisplayed();
    const zip = '60000';
    (await locators.email).click();
    await browser.keys(zip);
    await browser.pause(2000)
    await browser.keys("Tab");
    //(await locators.confirmPaymentButton).click()
    // shifted the above line to next scenerio
}

export async function confirmPayment(){
    await locators.confirmPaymentButton.waitForDisplayed();
    await locators.confirmPaymentButton.click();
};

export async function userDetails(){
    await switchToIframe();
    await email();
    browser.pause(500);
    await cardNo();
    browser.pause(500);
    await expiry();
    browser.pause(500);
    await CVC();
    browser.pause(500);
    await code();
}