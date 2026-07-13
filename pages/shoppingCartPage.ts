import { Page, Locator } from "@playwright/test";

export class ShoppingCartPage {

    readonly page: Page;
    readonly productCards: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly addToCartButton: Locator;
    readonly cartCount: Locator;
    readonly cartItems: Locator;
    readonly cartQuantity: Locator;
    readonly cartProductName: Locator;
    readonly cartProductPrice: Locator;
    readonly subTotal: Locator;
    readonly checkoutButton: Locator;
    readonly closecartButton: Locator;
    readonly cartbutton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.productCards = page.locator("div.sc-124al1g-2");
        this.productName = page.locator("p.sc-124al1g-4");
        this.productPrice = page.locator("p.sc-124al1g-6");
        this.addToCartButton = page.getByRole("button", { name: "Add to cart" });
        this.cartCount = page.locator("div.VLMSP");
        this.cartItems = page.locator("div.sc-11uohgb-0");
        this.cartQuantity = page.locator("p.sc-11uohgb-3");
        this.cartProductName = page.locator("p.sc-11uohgb-2");
        this.cartProductPrice = page.locator("div.sc-11uohgb-4 p");
        this.subTotal = page.locator("p.sc-1h98xa9-9");
        this.checkoutButton = page.getByRole("button", { name: "Checkout" });
        this.closecartButton = page.getByRole("button", { name: "X" });
        this.cartbutton = page.locator("button.sc-1h98xa9-0");
    }
}