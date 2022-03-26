export const registerCommands = () => {
  Cypress.Commands.add("testComponent", (componentName, props) => {
    let uri = `/_test-component?component=${componentName}`;
    if (props) {
      uri += `&props=${encodeURIComponent(JSON.stringify(props))}`;
    }
    cy.visit(uri);
  });
};
