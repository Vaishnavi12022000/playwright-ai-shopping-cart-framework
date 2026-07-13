import { expect, Page } from "@playwright/test";
import { ShoppingCartPage } from "../pages/shoppingCartPage";

export class ShoppingCartAction {
    readonly page: Page;
    readonly shoppingCartPage: ShoppingCartPage;

    constructor(page: Page) {
        this.page = page;
        this.shoppingCartPage = new ShoppingCartPage(page);
    }

    async verifyProductCount(expectedCount: number) {
        await expect(this.shoppingCartPage.productCards).toHaveCount(expectedCount);
    }

    async addProductsByPrice(targetPrices: string[]) {
        const productCount = await this.shoppingCartPage.productCards.count();
        const selectedProducts: { name: string; price: string }[] = [];
        for (let i = 0; i < productCount; i++) {
            const productName = await this.shoppingCartPage.productName.nth(i).textContent();
            const productPrice = await this.shoppingCartPage.productPrice.nth(i).textContent();
            if (productPrice && targetPrices.includes(productPrice)) {
                await this.shoppingCartPage.addToCartButton.nth(i).click();
                await this.shoppingCartPage.closecartButton.click();

                selectedProducts.push({
                    name: productName ?? "",
                    price: productPrice
                });
            }
        }
        return selectedProducts;
    }

    async opencart(){
        await this.shoppingCartPage.cartbutton.click();
    }

    async verifyAddedProducts(selectedProducts:{name:string;price:string}[]){
    await expect(this.shoppingCartPage.cartItems).toHaveCount(selectedProducts.length);
    for(let i=0;i<selectedProducts.length;i++){
        await expect(this.shoppingCartPage.cartProductName.nth(i)).toHaveText(selectedProducts[i].name);
        const actualPrice=await this.shoppingCartPage.cartProductPrice.nth(i).textContent();
        expect(actualPrice?.replace(/\s/g,"")).toBe(selectedProducts[i].price.replace(/\s/g,""));
        await expect(this.shoppingCartPage.cartQuantity.nth(i)).toContainText("Quantity: 1");
    }
    }

    async verifyCartCount(expectedCount:number){
        await expect(this.shoppingCartPage.cartCount).toHaveText(expectedCount.toString());
    }

    async verifyGrandTotal(selectedProducts:{name:string;price:string}[]){
        let expectedTotal=0;
        for(const product of selectedProducts){
            expectedTotal +=Number(product.price.replace("$",""));
        }
        await expect(this.shoppingCartPage.subTotal).toContainText(expectedTotal.toFixed(2));
    }

    async verifyCheckoutButton(){
        await expect(this.shoppingCartPage.checkoutButton).toBeVisible();
        await expect(this.shoppingCartPage.checkoutButton).toBeEnabled();
    }
}