# FrameworkArchitecture.md

# Automation Framework Architecture

## Project Information

| Item                     | Details                                           |
| ------------------------ | ------------------------------------------------- |
| **Project**              | React Shopping Cart Demo                          |
| **Automation Framework** | Playwright                                        |
| **Programming Language** | TypeScript                                        |
| **Framework Pattern**    | Page Object Model (POM) with Layered Architecture |
| **Assignment**           | AI-Driven Automation COE                          |
| **Version**              | 1.0                                               |

---

# 1. Introduction

The React Shopping Cart Demo automation framework is designed using a layered architecture built on **Playwright** and **TypeScript**. The framework emphasizes maintainability, readability, modularity, and reusability by separating page elements, business actions, test scenarios, fixtures, and test data into dedicated layers.

The implementation follows the **Page Object Model (POM)**, where page classes contain only locators and page initialization, while reusable business workflows and assertions are encapsulated within a dedicated Action Layer. Test scenarios remain concise by invoking reusable action methods rather than interacting directly with UI elements.

This architecture provides a clean and scalable foundation for automating the application's core shopping cart functionality while supporting future framework enhancements.

---

# 2. Framework Objectives

The primary objectives of the automation framework are to:

* Build a modular and maintainable automation solution.
* Separate UI locators, business logic, and test scenarios.
* Promote code reusability through reusable action methods.
* Reduce duplication using shared Playwright fixtures.
* Externalize test data for easier maintenance.
* Centralize framework configuration.
* Improve readability and maintainability of automation code.
* Establish a scalable foundation for future automation growth.

---

# 3. Project Folder Structure

```text
React-Shopping-Cart-Demo
│
├── actions/
├── docs/
├── fixtures/
├── pages/
├── testdata/
├── tests/
├── utils/
└── playwright.config.ts
```

---

# 4. Architecture Overview

The framework follows a layered architecture where each layer has a clearly defined responsibility.

```text
                    Test Layer
           (Test Scenarios Only)
                     │
                     ▼
                 Action Layer
   (Reusable Business Methods & Assertions)
                     │
                     ▼
              Page Object Layer
      (Locators & Page Initialization)
                     │
                     ▼
              Playwright Framework
                     │
                     ▼
         React Shopping Cart Application
```

### Architecture Summary

* **Pages** contain only locators and page initialization.
* **Actions** implement reusable business methods, user interactions, and assertions.
* **Tests** contain only test scenarios and invoke action methods.
* **Fixtures** provide common Playwright object initialization.
* **Test Data** is maintained externally using JSON files.
* **Configuration** is centralized in the Playwright configuration file.

This separation improves maintainability while minimizing duplicated code.

---

# 5. Layer Responsibilities

## Pages Layer (`pages/`)

The Pages layer implements the Page Object Model.

### Responsibilities

* Store UI locators.
* Initialize page objects.
* Represent application pages.

No business logic, assertions, or test scenarios are implemented in this layer.

---

## Actions Layer (`actions/`)

The Action Layer contains reusable business operations that interact with the Page Objects.

### Responsibilities

* Business workflows.
* User interactions.
* Reusable methods.
* Assertions and validations.

This layer acts as the bridge between the Test Layer and the Page Layer.

---

## Tests Layer (`tests/`)

The Test Layer contains automation scenarios.

### Responsibilities

* Define test scenarios.
* Invoke reusable action methods.
* Verify business workflows.

Tests do not contain UI locators or business implementation details, improving readability and maintainability.

---

## Fixtures Layer (`fixtures/`)

The Fixtures layer provides shared Playwright fixtures.

### Responsibilities

* Common object creation.
* Shared setup across test cases.
* Reduction of repetitive initialization code.

Using fixtures helps standardize test setup and keeps test scripts concise.

---

## Test Data Layer (`testdata/`)

The Test Data layer stores externalized JSON test data.

### Responsibilities

* Product selection data.
* Validation data.
* Input values.
* Expected results.

Separating test data from automation logic simplifies maintenance and supports data-driven testing.

---

## Documentation Layer (`docs/`)

The documentation folder contains project artifacts produced during the assignment.

Current documents include:

* ApplicationAnalysis.md
* TestPlan.md
* TestCases.md
* FrameworkArchitecture.md

These documents provide traceability from application analysis through framework implementation.

---

## Utilities Layer (`utils/`)

The `utils` folder is currently part of the project structure and reserved for reusable utility components as the framework evolves.

At the current stage of implementation, no utility methods have been added.

---

## Configuration (`playwright.config.ts`)

Framework configuration is centralized in the Playwright configuration file.

### Responsibilities

* Centralized Playwright settings.
* Browser execution configuration.
* Common framework configuration.

Maintaining configuration in a single location improves consistency and simplifies framework maintenance.

---

# 6. Test Execution Flow

The framework executes tests using the following workflow:

```text
Playwright Test Runner
          │
          ▼
Initialize Fixtures
          │
          ▼
Execute Test Scenario
          │
          ▼
Invoke Action Methods
          │
          ▼
Interact with Page Objects
          │
          ▼
Execute User Actions
          │
          ▼
Perform Assertions
          │
          ▼
Generate Test Results
```

### Current Automated Validations

The framework currently automates the following Task 1 scenarios:

* Product selection by price.
* Add matching products to cart.
* Product name validation.
* Product price validation.
* Quantity validation.
* Cart count validation.
* Grand total validation.
* Checkout button validation.

---

# 7. Framework Design Principles

The framework has been developed using the following design principles:

* Separation of concerns.
* Layered architecture.
* Page Object Model (POM).
* Reusable business actions.
* Externalized test data.
* Centralized configuration.
* Minimal code duplication.
* High readability.
* Maintainable automation code.
* Scalable project organization.

These principles improve long-term maintainability and simplify future enhancements.

---

# 8. AI Usage

Artificial Intelligence was used as a productivity and documentation assistant throughout the assignment.

AI-assisted activities included:

* Application analysis.
* Test plan preparation.
* Test case generation.
* AI assisted framework designand implementation guidance.
* Framework guidance.

All framework implementation, automation logic, validations, and final deliverables were reviewed and aligned with the project requirements.

---

# 9. Framework Benefits

The implemented architecture provides several advantages:

* Clear separation between UI elements, business logic, and test scenarios.
* Improved maintainability through modular design.
* Reusable business actions that reduce code duplication.
* Externalized test data for easier updates.
* Shared fixtures that simplify object creation.
* Centralized framework configuration.
* Readable and organized automation code.
* Scalable foundation for expanding automation coverage.
* Consistent framework structure suitable for enterprise automation projects.

---

# 10. Future Enhancements

The following enhancements are identified as future improvements and are **not part of the current implementation**:

* Implement reusable utility methods within the `utils` layer.
* Integrate custom reporting for enhanced execution insights.
* Configure Continuous Integration and Continuous Deployment (CI/CD) pipelines for automated test execution.
* Add support for multiple execution environments.
* Explore integration with Playwright MCP capabilities.
* Evaluate AI agent integration to assist with future automation workflows and framework enhancements.
* Integrate GitHub Actions for auatomated build,execution, and report publishing.

These enhancements can further improve the scalability, maintainability, and automation capabilities of the framework as the project evolves.
