it("ButtonToggle can toggle", () => {
  cy.testComponent("button-toggle", { inactiveLabel: "off", activeLabel: "on" })
    .get('[data-test="toggle-button"]')
    .should("contain.text", "off")
    .click()
    .should("contain.text", "on")
    .click()
    .should("contain.text", "off");
});
