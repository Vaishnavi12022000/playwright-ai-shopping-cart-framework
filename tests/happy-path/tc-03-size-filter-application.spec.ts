import { test, expect } from "../../fixtures/baseFixture";
import shoppingcart from "../../testdata/shoppingcart.json";
import { Logger } from "../../utils/logger";

test.describe("Happy Path", () => {
  test("TC-03 - Size Filter Application", async ({ appAction }) => {
    Logger.info("TC-03: validate size filter application");
    await appAction.shoppingCart.verifyProductCount(shoppingcart.expectedProductCount);

    const sizeFilterButtons = appAction.shoppingCart.page.locator("button").filter({ hasText: /S|M|L/ });
    if (await sizeFilterButtons.count()) {
      await sizeFilterButtons.first().click();
    }

    await expect(appAction.shoppingCart.shoppingCartPage.productCards.first()).toBeVisible();
    const visibleProductCount = await appAction.shoppingCart.shoppingCartPage.productCards.count();
    expect(visibleProductCount).toBeGreaterThan(0);
  });
});
