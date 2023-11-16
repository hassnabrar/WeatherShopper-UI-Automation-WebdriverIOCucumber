import * as locators from "@wdio-ui/checkoutPage/checkoutPage.locators";
import assert from "soft-assert"
export async function headlineCheck() {
    (await locators.header).waitForDisplayed();
    const head = (await locators.header).getText();
    await assert.softAssert(await head,'Checkout','Error message not matched',true);
    assert.softAssertAll()
};

export async function urlCheck(){
    const url = await browser.getUrl();
    await assert.softAssert(url,'https://weathershopper.pythonanywhere.com/cart','Not on the correct page',true);
    assert.softAssertAll()
}

export async function itemCheck(){
    const item = await locators.item.waitForDisplayed();
    await assert.softAssert(item, true, 'should be visible')
}