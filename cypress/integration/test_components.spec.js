describe("Test component", () => {
  it("Logo title can be set", () => {
    cy.testComponent("nuxt-logo", { title: "json" })
      .get('[data-test="logo-title"]')
      .should("contain.text", "json");
  });

  it("Tutorial says welcome", () => {
    cy.testComponent("tutorial")
      .get('[data-test="welcome-header"]')
      .should("contain.text", "Welcome");
  });

  it("ButtonToggle can toggle", () => {
    cy.testComponent("button-toggle", { offText: "off", onText: "on" })
      .get('[data-text="toggle-button"]')
      .should("contain.text", "button off")
      .click()
      .should("contain.text", "button on")
      .click()
      .should("contain.text", "button off");
  });

  it("ButtonToggle can start active", () => {
    cy.testComponent("button-toggle", {
      offText: "off",
      onText: "on",
      startActive: true,
    })
      .get('[data-text="toggle-button"]')
      .should("contain.text", "button on");
  });
});
