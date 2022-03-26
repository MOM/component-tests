describe("Test Banner component", () => {
  it("Banner message can be set", () => {
    const message = "Act now!";
    cy.testComponent("banner", { message })
      .get('[data-test="banner:message"]')
      .should("contain.text", message);
  });
});
