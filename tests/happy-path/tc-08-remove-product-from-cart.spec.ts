import { test } from "../../fixtures/baseFixture";
import shoppingcart from "../../testdata/shoppingcart.json";
import { Logger } from "../../utils/logger";

test.describe("Happy Path", () => {
  test("TC-08 - Remove Product from Cart", async ({ appAction }) => {
    Logger.info("TC-08: remove a product from cart");
    const selectedProducts = await appAction.shoppingCart.addProductsByPrice([shoppingcart.targetPrices[0]]);
    await appAction.shoppingCart.opencart();
    await appAction.shoppingCart.verifyAddedProducts(selectedProducts);
    await appAction.shoppingCart.shoppingCartPage.closecartButton.click();
  });
});
