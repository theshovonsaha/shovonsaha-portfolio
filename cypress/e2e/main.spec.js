describe("Next.js migrated pages", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("renders home and routes to creative page", () => {
    cy.contains("SOFTWARE • CREATIVE • STORY").should("exist")
    cy.contains("Open Creative Portfolio").click()
    cy.url().should("include", "/creative")
  })

  it("renders creative categories", () => {
    cy.visit("/creative")
    cy.contains("Portrait Photography").should("exist")
    cy.contains("Wedding Stories").should("exist")
  })

  it("serves category gallery pages and privacy page", () => {
    cy.visit("/creative/people")
    cy.contains("Portrait Photography").should("exist")
    cy.visit("/privacy")
    cy.contains("Privacy Policy").should("exist")
  })
})
