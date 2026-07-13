import { test as base, expect } from "@playwright/test";
import { ShoppingCartAction } from "../actions/shoppingCartAction";
import shoppingcart from "../testdata/shoppingcart.json";
type Fixtures = {
    gotoBaseUrl: void;
    appAction: AppActions;
};
type AppActions = {
    shoppingCart: ShoppingCartAction;
};

export const test = base.extend<Fixtures>({
    gotoBaseUrl: [
        async ({ page }, use) => {
            await page.goto(shoppingcart.baseUrl);
            await expect(page).toHaveURL(shoppingcart.baseUrl);
            await use();
        },
        { auto: true },
    ],
    appAction: async ({ page }, use) => {
        const appAction: AppActions = {
            shoppingCart: new ShoppingCartAction(page),
        };
        await use(appAction);
    },
});
export { expect } from "@playwright/test";