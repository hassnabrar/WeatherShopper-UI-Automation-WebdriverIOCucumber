import * as assertions from "@wdio-ui/confirmationPage/confirmationPage.assertions";
import * as locatorscheckout from "@wdio-ui/checkoutPage/checkoutPage.locators";
export async function urlAndHeadingsCheck() {

    await assertions.urlCheck();
    await assertions.headlineCheck();
    await assertions.SUBheadlineCheck();
};

