# Test Cases

## Application Overview

Concise happy-path test cases for the React shopping cart demo, derived from the approved test plan.

## Test Scenarios

### 1. Happy Path Test Cases

**Seed:** `tests/seed.spec.ts`

#### 1.1. TC-01 - Catalog Landing Page Visibility

**File:** `tests/happy-path/tc-01-catalog-landing-page-visibility.spec.ts`

**Steps:**
  1. Preconditions: The application is accessible and the browser is opened to the product catalog URL.
    - expect: Test Data: Default catalog view with no filters applied.
    - expect: Expected Result: The catalog landing page displays successfully with visible product cards and no error state.
    - expect: Priority: High

#### 1.2. TC-02 - Product Information Visibility

**File:** `tests/happy-path/tc-02-product-information-visibility.spec.ts`

**Steps:**
  1. Preconditions: The catalog page is open and products are loaded.
    - expect: Test Data: Any visible product from the default catalog.
    - expect: Expected Result: Product name, price, and visual product reference are clearly visible.
    - expect: Priority: High

#### 1.3. TC-03 - Size Filter Application

**File:** `tests/happy-path/tc-03-size-filter-application.spec.ts`

**Steps:**
  1. Preconditions: The catalog page is open with the default product list visible.
    - expect: Test Data: One available size option such as S, M, or L.
    - expect: Expected Result: The product list updates to show only products matching the selected size.
    - expect: Priority: Medium

#### 1.4. TC-04 - Add Single Product to Cart

**File:** `tests/happy-path/tc-04-add-single-product-to-cart.spec.ts`

**Steps:**
  1. Preconditions: The catalog page is open and at least one product is available.
    - expect: Test Data: One visible product with a valid price.
    - expect: Expected Result: The selected product appears in the cart with quantity 1 and the cart count updates.
    - expect: Priority: High

#### 1.5. TC-05 - Add Multiple Products to Cart

**File:** `tests/happy-path/tc-05-add-multiple-products-to-cart.spec.ts`

**Steps:**
  1. Preconditions: The catalog page is open and multiple products are available.
    - expect: Test Data: Two distinct products, for example products priced at $10.90 and $14.90.
    - expect: Expected Result: Both products appear in the cart as separate items with correct quantities.
    - expect: Priority: High

#### 1.6. TC-06 - Increase Item Quantity

**File:** `tests/happy-path/tc-06-increase-item-quantity.spec.ts`

**Steps:**
  1. Preconditions: A product is already present in the cart.
    - expect: Test Data: One cart item with initial quantity 1.
    - expect: Expected Result: The item quantity increases to 2 and the cart summary reflects the updated quantity.
    - expect: Priority: High

#### 1.7. TC-07 - Decrease Item Quantity

**File:** `tests/happy-path/tc-07-decrease-item-quantity.spec.ts`

**Steps:**
  1. Preconditions: A product with quantity greater than 1 exists in the cart.
    - expect: Test Data: One cart item with quantity 2.
    - expect: Expected Result: The item quantity decreases to 1 and the cart updates accordingly.
    - expect: Priority: Medium

#### 1.8. TC-08 - Remove Product from Cart

**File:** `tests/happy-path/tc-08-remove-product-from-cart.spec.ts`

**Steps:**
  1. Preconditions: At least one product is present in the cart.
    - expect: Test Data: One cart item.
    - expect: Expected Result: The selected product is removed from the cart and the cart count is updated.
    - expect: Priority: High

#### 1.9. TC-09 - Single Item Pricing

**File:** `tests/happy-path/tc-09-single-item-pricing.spec.ts`

**Steps:**
  1. Preconditions: One product is added to the cart.
    - expect: Test Data: One product with a known unit price, such as $10.90.
    - expect: Expected Result: The subtotal equals the unit price for a single-item cart.
    - expect: Priority: High

#### 1.10. TC-10 - Multi Item Pricing

**File:** `tests/happy-path/tc-10-multi-item-pricing.spec.ts`

**Steps:**
  1. Preconditions: Two products are added to the cart.
    - expect: Test Data: Two products priced at $10.90 and $14.90.
    - expect: Expected Result: The subtotal and grand total reflect the combined value of both items correctly.
    - expect: Priority: High

#### 1.11. TC-11 - Checkout Initiation from Valid Cart

**File:** `tests/happy-path/tc-11-checkout-initiation-from-valid-cart.spec.ts`

**Steps:**
  1. Preconditions: The cart contains at least one valid product item.
    - expect: Test Data: One or more valid cart items.
    - expect: Expected Result: Checkout begins successfully and the user is taken to the next checkout step.
    - expect: Priority: High

#### 1.12. TC-12 - Continue Shopping from Cart

**File:** `tests/happy-path/tc-12-continue-shopping-from-cart.spec.ts`

**Steps:**
  1. Preconditions: The cart is open and contains at least one item.
    - expect: Test Data: Existing cart with one or more items.
    - expect: Expected Result: The user returns to the catalog and can continue browsing without losing the catalog view.
    - expect: Priority: Medium
