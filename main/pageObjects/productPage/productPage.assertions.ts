import * as locators from "@wdio-ui/productPage/productPage.locators";
import * as locator from "@wdio-ui/temperaturePage/temperaturePage.locators";
import assert from "soft-assert"
import  * as tasks from "@wdio-ui/productPage/productPage.tasks";


// cart page assertion
export async function urlCheck(){
    const url = await  browser.getUrl();
    await assert.softAssert(url,'https://weathershopper.pythonanywhere.com/cart','Error message not matched',true);
    assert.softAssertAll()
}
export async function tempHeaderAssertion(header){
const headerText = await locator.title.getText();
await assert.softAssert(headerText,header,'Error message not matched',true);
assert.softAssertAll()
}

export async function HeaderAssertion(title){
    await (locators.heading).waitForDisplayed({timeout:1000})
    var headerText = await locators.heading.getText();
    // console.log(headerText)
    await assert.softAssert(headerText,title,'Error message not matched',[]);
    assert.softAssertAll()
}

export async function SumAssertions(cheapestAloe, cheapestAlmond, cheapestSPF30, cheapestSPF50){
        const moistSum = (cheapestAloe) + (cheapestAlmond);
        const sunSum = (cheapestSPF30) + (cheapestSPF50);
        const actualSum = await tasks.checkoutActualSum(); 
        const checkoutsum = await tasks.checkoutSum();

        if (moistSum != null && moistSum != 0 && !isNaN(moistSum))
        {
            assert.softAssert(moistSum, actualSum, 'The numbers are equal.');
            assert.softAssert(moistSum,checkoutsum, 'The numbers are equal.');
            assert.softAssert(actualSum, checkoutsum, 'The numbers are equal.');
            assert.softAssertAll()
        }

        else if (sunSum != null && sunSum != 0 && !isNaN(sunSum)){
            assert.softAssert(sunSum, actualSum, 'The numbers are equal.');
            assert.softAssert(sunSum,checkoutsum, 'The numbers are equal.');
            assert.softAssert(actualSum, checkoutsum, 'The numbers are equal.');
            assert.softAssertAll()
        }

}
export async function cartButtonVisibility() {
    await locators.cartButton.waitForDisplayed();
    await assert.softAssert(await locators.cartButton.isDisplayed(), true, 'Cart button is not visible');
}