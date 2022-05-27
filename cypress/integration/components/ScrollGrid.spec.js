it("ScrollGrid can render", () => {
  cy.viewport(375, 500);
  const props = {};
  cy.testComponent("scroll-grid", props).get("ul").should("exist");
});
