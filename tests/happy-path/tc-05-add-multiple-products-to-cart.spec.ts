import { test } from "../../fixtures/baseFixture";
import shoppingcart from "../../testdata/shoppingcart.json";
import { Logger } from "../../utils/logger";

test.describe("Happy Path", () => {
  test("TC-05 - Add Multiple Products to Cart", async ({ appAction }) => {
    Logger.info("TC-05: add multiple products to cart");
    const selectedProducts = await appAction.shoppingCart.addProductsByPrice(shoppingcart.targetPrices);
    await appAction.shoppingCart.opencart();
    await appAction.shoppingCart.verifyAddedProducts(selectedProducts);
    await appAction.shoppingCart.verifyCartCount(selectedProducts.length);
  });
});
