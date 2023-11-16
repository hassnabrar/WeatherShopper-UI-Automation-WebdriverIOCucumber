import * as locators from "@wdio-ui/temperaturePage/temperaturePage.locators";

export async function readTemperatureAndClick(){
    await locators.temperature.waitForDisplayed();
    const temp = await locators.temperature.getText();
    const numericPart = temp.match(/\d+/);

    // @ts-expect-error
    if (numericPart < 19 ) 
    {
        (await locators.moisturizerBtn).waitForDisplayed();
        await locators.moisturizerBtn.click();
        var url = await browser.getUrl();
        return url;
    }

    //@ts-ignore
    else if (numericPart > 34 ) 
    {
        (await locators.sunscreenBtn).waitForDisplayed();
        await locators.sunscreenBtn.click();
        var url = await browser.getUrl();
        return url;
    }
}
export async function orAssertion(expected1, expected2) 
{
    const headline = (await locators.title).waitForDisplayed();
    return headline === expected1 || headline === expected2;
}
  