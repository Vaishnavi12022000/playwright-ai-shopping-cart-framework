import { test, expect } from "../../fixtures/baseFixture";
import shoppingcart from "../../testdata/shoppingcart.json";
import { Logger } from "../../utils/logger";

test.describe("Happy Path", () => {
  test("TC-02 - Product Information Visibility", async ({ appAction }) => {
    Logger.info("TC-02: validate product information visibility");
    await appAction.shoppingCart.verifyProductCount(shoppingcart.expectedProductCount);
    await expect(appAction.shoppingCart.shoppingCartPage.productName.first()).toBeVisible();
    await expect(appAction.shoppingCart.shoppingCartPage.productPrice.first()).toBeVisible();
  });
});
