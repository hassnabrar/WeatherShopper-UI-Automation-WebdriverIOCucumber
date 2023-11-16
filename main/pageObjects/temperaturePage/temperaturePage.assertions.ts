import * as locators from "@wdio-ui/temperaturePage/temperaturePage.locators";
import assert from "soft-assert"
import  * as tasks from "@wdio-ui/temperaturePage/temperaturePage.tasks";

export async function assertionOnLoginPages(){
    const Url =  await browser.getUrl();
    console.log(Url)
    assert.softAssert(Url, 'https://weathershopper.pythonanywhere.com/','did not navigate to the correct url',true)
    await (locators.title).waitForDisplayed({timeout:1500})
    let expectedText=await locators.title.getText()
    
    await assert.softAssert(await locators.temperature.isDisplayed(), true, 'Temperature is not visible');
    await assert.softAssert(await locators.moisturizerBtn.isDisplayed(), true, 'Temperature is not visible');
    await assert.softAssert(await locators.sunscreenBtn.isDisplayed(), true, 'Temperature is not visible');await assert.softAssert(expectedText,'Current temperature','Error title not matched',true)
    assert.softAssertAll()
}
export async function assertionAfterSelectingProduct(){
    tasks.readTemperatureAndClick() 
}