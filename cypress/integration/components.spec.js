describe("Test component", () => {
  it("successfully loads", () => {
    cy.testComponent("nuxt-logo", { title: "json" })
      .get('[data-test="logo-title"]')
      .should("contain.text", "json");
  });
});
