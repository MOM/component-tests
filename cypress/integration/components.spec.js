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
});
