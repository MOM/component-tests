# CyCo

## Cypress Component Testing

CyCo is a [nuxt](https://nuxtjs.org/) module that lets you test a single component in [Cypress](https://www.cypress.io/) using `cy.testComponent`.

## Installation

```
yarn add -D cyco
```

```javascript
// nuxt.config

buildModules: ["cyco"],
```

```javascript
// cypress/support/index.js

import "cyco/cypress/support";
```

## Workflow

### Create a component

```html
<!-- components/MyButton.vue -->

<template>
  <button data-test="my-button">{{ label }}</button>
</template>

<script>
  export default {
    props: ["label"],
  };
</script>
```

### Create a component test

```javascript
// cypress/integration/components/MyButton.js

it("MyButton can render the label", () => {
  const label = "My Button";
  const props = { label };
  cy.testComponent("my-button", props)
    .get('[data-test="my-button"]')
    .should("contain.text", label);
});
```

### Run test to view single component

![My Button Screen Shot](./docs/MyButtonScreenShot.png "My Button Test Run")

### Iterate on component tests and development

- Write multiple tests using different props
- Use `it.only()` to focus on one test criteria at a time
- Hot reload time reduced as component rather than page is rendered

## API

`cy.testComponent(componentName: String, props: Object)`
