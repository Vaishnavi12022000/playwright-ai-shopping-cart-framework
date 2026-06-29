import {test,expect} from "../fixtures/baseFixture";
import shoppingcart from "../testdata/shoppingcart.json";

test("Verify shopping cart functionality",async({appAction})=>{
    //1.verify product count displayed on ui
    await appAction.shoppingCart.verifyProductCount(shoppingcart.expectedProductCount);
    //2.Add products based on Json prices
    const selecteditems =await appAction.shoppingCart.addProductsByPrice(shoppingcart.targetPrices);
    await appAction.shoppingCart.opencart();
    //3.verify added products(name,price,quantity)
    await appAction.shoppingCart.verifyAddedProducts(selecteditems);
    //4.verify cart count(quantity)
    await appAction.shoppingCart.verifyCartCount(selecteditems.length);
    //5.verify grand total
    await appAction.shoppingCart.verifyGrandTotal(selecteditems);
    //6.verify checkout button
    await appAction.shoppingCart.verifyCheckoutButton();
})