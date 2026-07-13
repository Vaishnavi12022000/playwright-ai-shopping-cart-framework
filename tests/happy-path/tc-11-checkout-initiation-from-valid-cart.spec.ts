import { test } from "../../fixtures/baseFixture";
import shoppingcart from "../../testdata/shoppingcart.json";
import { Logger } from "../../utils/logger";

test.describe("Happy Path", () => {
  test("TC-11 - Checkout Initiation from Valid Cart", async ({ appAction }) => {
    Logger.info("TC-11: initiate checkout from valid cart");
    const selectedProducts = await appAction.shoppingCart.addProductsByPrice([shoppingcart.targetPrices[0]]);
    await appAction.shoppingCart.opencart();
    await appAction.shoppingCart.verifyAddedProducts(selectedProducts);
    await appAction.shoppingCart.verifyCheckoutButton();
  });
});
