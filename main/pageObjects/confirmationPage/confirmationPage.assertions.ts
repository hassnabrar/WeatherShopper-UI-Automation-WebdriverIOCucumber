import * as locators from "@wdio-ui/confirmationPage/confirmationPage.locators";
import assert from "soft-assert"

export async function urlCheck(){
    const url = await browser.getUrl();
    await assert.softAssert(url,'https://weathershopper.pythonanywhere.com/confirmation','Not on the correct page',true);
    assert.softAssertAll()
};

export async function headlineCheck() {
    //(await locators.header).waitForDisplayed();
    const head = (await locators.heading).getText();
    await assert.softAssert(await head,'PAYMENT SUCCESS','Error message not matched',true);
    assert.softAssertAll()
};


export async function SUBheadlineCheck() {
    //(await locators.subHeading).waitForDisplayed();
    const subHeading = (await locators.subHeading).getText();
    await assert.softAssert(await  subHeading,'Your payment was successful. You should receive a follow-up call from our sales team.','Error message not matched',true);
    assert.softAssertAll()
};