# Test Cases - React Shopping Cart Demo

## Document Information

| Item            | Value                                |
| --------------- | -------------------------------------|
| Project         | React Shopping Cart Demo             |
| Document        | Test Cases                           |
| Automation Tool | Playwright                           |
| Language        | TypeScript                           |
| Test Level      | System/Functional / E2E / Regression |
| Version         | 1.0                                  |

---

## Functional Test Cases

| Test Case ID | Module          | Test Scenario                                   | Preconditions             | Test Steps                                              | Test Data                | Expected Result                                              | Priority |
| ------------ | --------------- | ----------------------------------------------- | ------------------------- | ------------------------------------------------------- | ------------------------ | ------------------------------------------------------------ | -------- |
| TC-F-001     | Product Listing | Verify product catalog is displayed             | Application is launched   | 1. Open application<br>2. Observe product listing       | Default catalog          | Product cards display image, name, price,available sizes,and correct pricing format($xx.xx) | P0       |
| TC-F-002     | Product Listing | Verify all products display correct information | Application is launched   | Compare displayed name and price with product data      | Product catalog          | Product name, image and price match expected data            | P0       |
| TC-F-003     | Product Filter  | Verify size filter functionality                | Product catalog loaded    | 1. Select a size filter<br>2. Observe filtered products | Size = M                 | Only products matching selected size are displayed and product count updates correctly| P0       |
| TC-F-004     | Product Filter  | Verify changing size filters updates results    | Product catalog loaded    | Switch between multiple size filters                    | XS, S, M, L, XL          | Product list refreshes correctly for each selected size      | P1       |
| TC-F-005     | Cart            | Verify adding a product to cart                 | Product available         | Click Add to Cart                                       | Single product           | Product is added with quantity = 1                           | P0       |
| TC-F-006     | Cart            | Verify adding multiple different products       | Product catalog loaded    | Add different products                                  | Multiple products        | All products appear separately in cart                       | P0       |
| TC-F-007     | Cart            | Verify adding same product multiple times       | Product available         | Click Add to Cart repeatedly                            | Same product             | Quantity increases without duplicate inconsistent entries    | P0       |
| TC-F-008     | Cart            | Verify product name in cart                     | Product added             | Open cart                                               | Product                  | Cart displays correct product name                           | P0       |
| TC-F-009     | Cart            | Verify product price in cart                    | Product added             | Open cart                                               | Product                  | Cart displays correct product price                          | P0       |
| TC-F-010     | Quantity        | Verify increasing quantity                      | Product exists in cart    | Click increase button                                   | Quantity = 1             | Quantity increments and subtotal updates immediately without UI delay| P0       |
| TC-F-011     | Quantity        | Verify decreasing quantity                      | Quantity greater than 1   | Click decrease button                                   | Quantity = 2             | Quantity decreases correctly without UI delay                  | P0       |
| TC-F-012     | Quantity        | Verify total quantity calculation               | Multiple items added      | Observe total quantity                                  | Multiple products        | Total quantity equals sum of all item quantities             | P0       |
| TC-F-013     | Pricing         | Verify item subtotal calculation                | Product in cart           | Update quantity                                         | Product price × quantity | Item subtotal is calculated correctly and displayed in consistent currency format($xx.xx)| P0       |
| TC-F-014     | Pricing         | Verify cart grand total calculation             | Multiple products added   | Observe total                                           | Multiple products        | Grand total equals sum of all subtotals with correct currency formatting | P0       |
| TC-F-015     | Cart            | Verify removing a single item                   | Product exists in cart    | Remove product                                          | Cart item                | Selected item is removed                                     | P0       |
| TC-F-016     | Cart            | Verify clearing cart                            | Multiple products in cart | Remove all items                                        | Cart items               | Cart becomes empty                                           | P1       |
| TC-F-017     | Cart Summary    | Verify cart summary values                      | Products in cart          | Observe summary                                         | Multiple products        | Quantity, subtotal and total are accurate                    | P0       |
| TC-F-018     | Navigation      | Verify continue shopping after cart update      | Product added             | Navigate back to product list                           | Product                  | Cart contents remain unchanged                               | P1       |
| TC-F-019     | Checkout        | Verify Checkout button availability             | Cart contains products    | Open cart                                               | Valid cart               | Checkout button is visible and enabled                       | P0       |
| TC-F-020     | Checkout        | Verify checkout initiation                      | Cart contains products    | Click Checkout                                          | Valid cart               | Checkout flow is initiated successfully                      | P0       |

---

## Negative Test Cases

| Test Case ID | Module          | Test Scenario                   | Preconditions         | Test Steps             | Test Data       | Expected Result                                | Priority |
| ------------ | --------------- | ------------------------------- | --------------------- | ---------------------- | --------------- | ---------------------------------------------- | -------- |
| TC-N-001     | Cart            | Add product during cart failure | Simulated API/cart update failure using network interception     | Attempt Add to Cart    | Product         | Graceful error shown without application crash | P1       |
| TC-N-002     | Cart            | Remove already removed item     | Item already removed  | Attempt removal again  | Removed product | Application remains stable                     | P1       |
| TC-N-003     | Quantity        | Enter zero quantity             | Quantity editable     | Enter 0                | 0               | System rejects invalid quantity and retains previous valid value| P0       |
| TC-N-004     | Quantity        | Enter negative quantity         | Quantity editable     | Enter -1               | -1              | System rejects invalid quantity and retains previous valid value| P0       |
| TC-N-005     | Quantity        | Enter invalid characters        | Quantity editable     | Enter alphabetic value | abc             | Invalid input rejected                         | P1       |
| TC-N-006     | Checkout        | Checkout with empty cart        | Empty cart            | Click Checkout         | Empty cart      | Checkout is blocked appropriately              | P0       |
| TC-N-007     | Cart            | Rapid Add to Cart clicks        | Product available     | Click Add repeatedly   | Same product    | Cart remains consistent without corruption     | P1       |
| TC-N-008     | Network         | Refresh during cart update      | Product being updated | Refresh browser        | Active cart     | Cart state handled safely                      | P1       |
| TC-N-009     | Network         | Simulate network interruption   | Network interrupted   | Perform cart action    | Product         | Error displayed and application remains usable | P1       |
| TC-N-010     | Product Listing | Missing product information     | Invalid product data  | Load catalog           | Missing fields  | UI degrades gracefully without breaking layout | P2       |

---

## Boundary Test Cases

| Test Case ID | Module          | Test Scenario                              | Preconditions                    | Test Steps                      | Test Data                  | Expected Result                          | Priority |
| ------------ | --------------- | ------------------------------------------ | -------------------------------- | ------------------------------- | -------------------------- | ---------------------------------------- | -------- |
| TC-B-001     | Cart            | Verify empty cart state                    | No items in cart                 | Open cart                       | Empty cart                 | Empty-cart message displayed             | P0       |
| TC-B-002     | Cart            | Verify single item cart                    | One product added                | Open cart                       | One item                   | Correct subtotal and quantity displayed  | P0       |
| TC-B-003     | Quantity        | Verify large quantity handling             | Product added                    | Increase quantity repeatedly    | Large quantity             | System handles large quantity without UI overflow and maintains correct total calculation| P2       |
| TC-B-004     | Product Listing | Verify long product names                  | Long-name product exists         | View catalog                    | Long product name          | Layout remains intact                    | P2       |
| TC-B-005     | Quantity        | Verify zero quantity restriction           | Product added                    | Attempt quantity = 0            | 0                          | System prevents invalid quantity         | P0       |
| TC-B-006     | Quantity        | Verify maximum quantity limit              | Product added                    | Increase beyond limit           | Maximum supported quantity | System enforces max quantity limit and prevent cart corruption| P1       |
| TC-B-007     | Product Filter  | Verify filter with no matching products    | Products loaded                  | Select unavailable size         | Unsupported filter         | "No products found" message displayed    | P1       |
| TC-B-008     | Navigation      | Verify browser back and forward navigation | Product added                    | Navigate using browser controls | Browser navigation         | Cart state remains consistent            | P1       |
| TC-B-009     | Session         | Verify multiple browser tabs               | Cart contains items              | Open another tab                | Existing cart              | Cart behavior remains predictable        | P2       |
| TC-B-010     | Product Listing | Verify special characters display          | Special character data available | View product                    | Special characters         | Text renders correctly without UI issues | P2       |

---

## Exploratory Test Cases

| Test Case ID | Module          | Test Scenario                              | Preconditions          | Test Steps                        | Test Data          | Expected Result                    | Priority |
| ------------ | --------------- | ------------------------------------------ | ---------------------- | --------------------------------- | ------------------ | ---------------------------------- | -------- |
| TC-E-001     | Product Listing | Explore rapid filtering                    | Catalog loaded         | Change filters rapidly            | Multiple sizes     | No UI flickering, layout break,or state incosistency observed during rapid filtering| P2       |
| TC-E-002     | Cart            | Explore random cart operations             | Products available     | Add, remove and update randomly   | Various products   | Cart remains consistent            | P2       |
| TC-E-003     | Pricing         | Explore pricing after multiple updates     | Multiple items added   | Perform random quantity updates   | Various quantities | Pricing remains accurate           | P1       |
| TC-E-004     | Navigation      | Explore repeated navigation                | Cart contains products | Navigate between pages repeatedly | Existing cart      | Cart state is preserved            | P2       |
| TC-E-005     | UI              | Explore responsiveness during cart updates | Products available     | Perform rapid user interactions   | Various actions    | No UI overlap or broken components | P2       |

---

## End-to-End Test Cases

| Test Case ID | Module        | Test Scenario                          | Preconditions          | Test Steps                                                                                    | Test Data         | Expected Result                                       | Priority |
| ------------ | ------------- | -------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------- | -------- |
| TC-E2E-001   | Purchase Flow | Happy path purchase journey            | Application launched   | Browse catalog → Add product → Open cart → Increase quantity → Verify totals → Click Checkout | Valid product     | All cart calculations (subtotal,total,quantity)are accurate and consistent with product catalog prices | P0       |
| TC-E2E-002   | Purchase Flow | Multi-item cart journey                | Application launched   | Add multiple products → Modify quantities → Remove one item → Verify total → Checkout         | Multiple products | Cart calculations remain accurate throughout          | P0       |
| TC-E2E-003   | Recovery      | Recovery after interrupted cart update | Simulated interruption | Attempt cart update → Receive error → Retry operation                                         | Product           | Retry succeeds and cart remains consistent            | P1       |
| TC-E2E-004   | Empty Cart    | Empty cart and re-entry journey        | Empty cart             | Verify empty state → Add item → Remove item → Verify empty state again                        | Single product    | Application correctly handles complete cart lifecycle | P1       |

---

## Traceability Summary

| Requirement Area    | Covered Test Cases       |
| ------------------- | ------------------------ |
| Product Listing     | TC-F-001 to TC-F-004     |
|Cart operations      | TC-F-005 to TC-F-009     |
| Quantity Management | TC-F-010 to TC-F-012     |
| Pricing Validation  | TC-F-013 to TC-F-014     |
| Cart Management     | TC-F-015 to TC-F-018     |
| Checkout            | TC-F-019 to TC-F-020     |
| Negative Validation | TC-N-001 to TC-N-010     |
| Boundary Validation | TC-B-001 to TC-B-010     |
| Exploratory Testing | TC-E-001 to TC-E-005     |
| End-to-End Testing  | TC-E2E-001 to TC-E2E-004 |

---

## Test Coverage Summary

- Functional Test Cases: 20
- Negative Test Cases: 10
- Boundary Test Cases: 10
- Exploratory Test Cases: 5
- End-to-End Test Cases:  4

**Total Test Cases:** **49**

## AI & MCP Strategy

- AI tools were used to help generate and refine the intial test scenarios
- The test cases were reviewed and updated manually to match the actual React Shopping cart application
- Playwright MCP will be used to assit with application analysis,test generation, debugging, and failure analysis during framework development
-Final test cases are aligned with the implemented Playwright automation framework and project requirements.
