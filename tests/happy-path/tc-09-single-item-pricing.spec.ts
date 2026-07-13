import { test } from "../../fixtures/baseFixture";
import shoppingcart from "../../testdata/shoppingcart.json";
import { Logger } from "../../utils/logger";

test.describe("Happy Path", () => {
  test("TC-09 - Single Item Pricing", async ({ appAction }) => {
    Logger.info("TC-09: validate single item pricing");
    const selectedProducts = await appAction.shoppingCart.addProductsByPrice([shoppingcart.targetPrices[0]]);
    await appAction.shoppingCart.opencart();
    await appAction.shoppingCart.verifyAddedProducts(selectedProducts);
    await appAction.shoppingCart.verifyCartCount(selectedProducts.length);
  });
});
