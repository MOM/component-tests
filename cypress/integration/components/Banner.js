describe("Test Banner component", () => {
  it("Banner message can be set", () => {
    const message = "Act now!";
    cy.testComponent("banner", { message })
      .get('[data-test="banner:message"]')
      .should("contain.text", message);
  });
  it("Banner hover background color", () => {
    cy.testComponent("banner", { message: "click me" })
      .get('[data-test="banner"]')
      .realHover()
      .should("have.css", "background-color", "rgb(231, 234, 248)");
  });
});
