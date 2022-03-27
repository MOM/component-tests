it("MyButton can render label", () => {
  cy.viewport(325, 200);
  const label = "My Button";
  const props = { label };
  cy.testComponent("my-button", props)
    .get('[data-test="my-button"]')
    .should("contain.text", label);
});
