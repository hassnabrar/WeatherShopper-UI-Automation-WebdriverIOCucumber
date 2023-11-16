import * as locators from "@wdio-ui/temperaturePage/temperaturePage.locators";
import * as locator from "@wdio-ui/productPage/productPage.locators";
import * as assertions from "@wdio-ui/productPage/productPage.assertions"
import assert from "soft-assert"

export async function findAndClickCheapestProduct(productName) {
    const productElements = await $$(`//p[contains(text(),'${productName}')]`);
    let cheapestProductPrice = Number.MAX_SAFE_INTEGER;
    let cheapestProductButton;

    for (const el of productElements) {
        const priceText = await el.$("./following-sibling::p").getText();
        const price = parseInt(priceText.replace(/[^0-9.]/g, ""));

        if (price < cheapestProductPrice) {
            cheapestProductPrice = price;
            cheapestProductButton = await el.$("./following-sibling::button");
        }
    }
    console.log(cheapestProductPrice);
    if (cheapestProductButton) {
        await cheapestProductButton.click();
        return cheapestProductPrice;
    } else {
        console.log(`No ${productName} items found`);
    }
}

export async function cheapestProductPrice(productName)
{
    const productElements = await $$(`//p[contains(text(),'${productName}')]`);
    let cheapestProductPrice = Number.MAX_SAFE_INTEGER;
    for (const el of productElements) {
        const priceText = await el.$("./following-sibling::p").getText();
        const price = parseInt(priceText.replace(/[^0-9.]/g, ""));

        if (price < cheapestProductPrice) {
            cheapestProductPrice = price;
        }
    }
        return cheapestProductPrice;
}

export async function checkoutSum() {
    var p1 = ( await locator.firstPrice).getText();
    const price1 = parseInt(await p1, 10)
    const p2 = ( await locator.secondPrice).getText();
    const price2 = parseInt(await p2, 10)
    const totalCheckoutPrice = price1 + price2;
    return totalCheckoutPrice;
}

export async function checkoutActualSum(){
    (await locator.actualTotal).waitForDisplayed();
    const textPrice = await locator.actualTotal.getText();
    var price =parseInt(textPrice.replace(/[^0-9.]/g, ""));
    price = price;
    return price;
}

export async function clickCart(){
    await (await locator.cartButton).waitForDisplayed();
    await locator.cartButton.click();
}

export async function selectAndClickCheapestProduct(link, cheapestAloe, cheapestAlmond, cheapestSPF50, cheapestSPF30) {

    console.log(link);
    if(link ==  'https://weathershopper.pythonanywhere.com/moisturizer') {
        var moist = 'Moisturizers';
        await assertions.HeaderAssertion(moist);
        var Aloe = 'Aloe';
        cheapestAloe = await findAndClickCheapestProduct(Aloe);
        var Almond = 'Almond';
        cheapestAlmond = await findAndClickCheapestProduct(Almond);
    }

    else if(link ==  'https://weathershopper.pythonanywhere.com/sunscreen') {
        var sunscreen = 'Sunscreens';
        await assertions.HeaderAssertion(sunscreen);
            var SPF30 = 'SPF-30';
            cheapestSPF30 = await findAndClickCheapestProduct(SPF30);
            var SPF50 = 'SPF-50';
            cheapestSPF50 = await findAndClickCheapestProduct(SPF50);
    }
}


