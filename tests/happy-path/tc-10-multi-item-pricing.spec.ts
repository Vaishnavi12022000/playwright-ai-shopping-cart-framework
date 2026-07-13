import { test } from "../../fixtures/baseFixture";
import shoppingcart from "../../testdata/shoppingcart.json";
import { Logger } from "../../utils/logger";

test.describe("Happy Path", () => {
  test("TC-10 - Multi Item Pricing", async ({ appAction }) => {
    Logger.info("TC-10: validate multi-item pricing");
    const selectedProducts = await appAction.shoppingCart.addProductsByPrice(shoppingcart.targetPrices);
    await appAction.shoppingCart.opencart();
    await appAction.shoppingCart.verifyAddedProducts(selectedProducts);
    await appAction.shoppingCart.verifyGrandTotal(selectedProducts);
  });
});
