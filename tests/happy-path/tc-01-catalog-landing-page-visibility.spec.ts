import { test } from "../../fixtures/baseFixture";
import shoppingcart from "../../testdata/shoppingcart.json";
import { Logger } from "../../utils/logger";

test.describe("Happy Path", () => {
  test("TC-01 - Catalog Landing Page Visibility", async ({ appAction }) => {
    Logger.info("TC-01: validate catalog landing page visibility");
    await appAction.shoppingCart.verifyProductCount(shoppingcart.expectedProductCount);
  });
});
