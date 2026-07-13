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

The `utils` folder contains reusable helper classes that improve code reusability and maintainability across the automation framework.

### Current Utilities

- ** priceUtils.ts**
 -Performs reusable price calculations and validation support.
 -Elimination duplicate pricing logic across tests scripts
- ** logger.ts**
 -Provides centralized logging methods such as Info, Success, and Error messages.
 -Improves execution readability and debugging.

  These reusable utilities keep business logic centralized and reduce duplication throughout the framework.
---

## Configuration (`playwright.config.ts`)

Framework configuration is centralized in the Playwright configuration file.

### Responsibilities

* Centralized Playwright settings.
* Browser execution configuration.
* Common framework configuration.
* Environment-based configuration using external configuration files 
* Base URL management for different environments.

The framework currently supports multiple environments through external configuration files(for example, Development and QA), allowing environment changes without modifying the automation scripts

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

Artificial Intelligence was used as an engineering acclerator throughout the assignment while ensuring the final implmentation was reviewed and aligned with the project requirements

AI-assisted activities included:

* Application analysis.
* Test plan preparation.
* Test case generation.
* Enterprise framework design guidance
* Playwright automation guidance
* AI-assisted generation of happy-path Playwright test scripts using the existing framework
* AI-assisted failure analysis and test healing for failed automation scenarios
* Framework documentation support

### Playwright MCP & AI Usage 
 The framework demonstrates the use of AI during different stages of of automation:

 -**Generator**
  -Generated Playwright happy-path test scripts from the completed Tested cases.
  -Reuse the existing Page objects ,Action classes, test data , utilities , and configuration without creating duplicate components.

- **Healer**
 - Analyzed failed Playwright test executions.
 - Identified root causes of failures
 - Suggested fixes while preserving the existing enterprise framework architecture.

AI was used to improve productivity and accelerate automation development , while all generated outputs were reviewed and validated before being incorporated into the framework.

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

# 10.CI/CD Integration
The framework is integrated with Github Actions to enable automated execution.

The pipeline performs the following activities:

- checks the latest source code
- Installs Node.js dependencies
- Installs Playwright browsers
- Executes the Playwright test suite
- Generates the Playwright HTML reports
- Uploads the execution report as a Github Action artifact for latest review.

This integration enables automated executionand supports continuos testing practices.


# 11. Future Enhancements

The following enhancements can be implemented in future versions of the framework:

* Integrate GitHub Actions or Azure DevOps CI/CD pipeline for automated execution.
* Publish Playwright HTML reports as CI/CD artifacts .
* Add cross-browser execution (Firefox, Webkit, Edge).
* Extend automation coverage for negative, boundray , exploratory , and end-to-end scenarios.
* Integrate advanced Playwright MCP capabilities for autonomous test generation and maintainenece .
* Support parallel execution across multiple environments and browsers.
