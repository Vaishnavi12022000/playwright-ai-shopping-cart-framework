import { test } from "../../fixtures/baseFixture";
import shoppingcart from "../../testdata/shoppingcart.json";
import { Logger } from "../../utils/logger";

test.describe("Happy Path", () => {
  test("TC-12 - Continue Shopping from Cart", async ({ appAction }) => {
    Logger.info("TC-12: continue shopping from cart");
    const selectedProducts = await appAction.shoppingCart.addProductsByPrice([shoppingcart.targetPrices[0]]);
    await appAction.shoppingCart.opencart();
    await appAction.shoppingCart.shoppingCartPage.closecartButton.click();
    await appAction.shoppingCart.verifyProductCount(shoppingcart.expectedProductCount);
  });
});
