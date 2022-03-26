# Test Component

## What is Test Componet

Test Component is a nuxt module to facilitate component developement and testing using Cypress.

- Render single components with props
- Test a component with Cypress

## Workflow

- Create a component
- Create a component spec
- Run spec to view single component
- Iterate on component tests and development

## Installation

```
yarn add -D test-component
```

`cypress/support/commands.js`

```
import { registerCommands } from "test-component/cypress";

registerCommands();
```
