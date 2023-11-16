// import { Given, When, Then } from '@wdio/cucumber-framework';
// import * as assertionss from '@wdio-ui/productPage/productPage.assertions';
// import * as taskss from '@wdio-ui/productPage/productPage.tasks';
// import * as taskTemp from '@wdio-ui/temperaturePage/temperaturePage.tasks';
// import * as locatorss from '@wdio-ui/productPage/productPage.locators';
// export var cheapestAloe
// export var cheapestAlmond
// export var cheapestSPF50
// export var cheapestSPF30
// Given ('User is on product page', async () => {;
//         await browser.url(`https://weathershopper.pythonanywhere.com/`)
//         // var temperatPage = 'Current temperature';
//         // await assertions.tempHeaderAssertion(temperatPage);
//     });
// When  ('User selects the cheapest products', async () =>{
//     const link = await taskTemp.readTemperatureAndClick();
//     console.log(link);
//     if(link ==  'https://weathershopper.pythonanywhere.com/moisturizer') {
//         var moist = 'Moisturizers';
//         await assertionss.HeaderAssertion(moist);
//         var Aloe = 'Aloe';
//         cheapestAloe = await taskss.findAndClickCheapestProduct(Aloe);
//         var Almond = 'Almond';
//         cheapestAlmond = await taskss.findAndClickCheapestProduct(Almond);
//     }

//     else if(link ==  'https://weathershopper.pythonanywhere.com/sunscreen') {
//         var sunscreen = 'Sunscreens';
//         await assertionss.HeaderAssertion(sunscreen);
//             var SPF30 = 'SPF-30';
//             cheapestSPF30 = await taskss.findAndClickCheapestProduct(SPF30);
//             var SPF50 = 'SPF-50';
//             cheapestSPF50 = await taskss.findAndClickCheapestProduct(SPF50);
//     }


//     //// idher assertion mei kidher dalon aur kia dalon?
// });

// When  ('User clicks the cart button', async () => {
//     await (await locatorss.cartButton).waitForDisplayed();
//     await locatorss.cartButton.click();
// });

// Then  ('User verifies the selected products on checkout page', async () => {
//     await assertionss.urlCheck();
//     await assertionss.SumAssertions(cheapestAloe,cheapestAlmond,cheapestSPF30,cheapestSPF50);
// });