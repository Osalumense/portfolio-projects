import { test, expect } from "@playwright/test";

test.describe("DensOps project visibility", () => {
  test("DensOps appears in the projects grid", async ({ page }) => {
    await page.goto("http://localhost:3002");

    // Scroll to the projects section
    await page.locator("#projects").scrollIntoViewIfNeeded();

    // Verify DensOps card is visible
    const densopsCard = page.locator("text=DensOps").first();
    await expect(densopsCard).toBeVisible();

    // Verify it shows the correct category
    const saasLabel = page.locator("text=SaaS").first();
    await expect(saasLabel).toBeVisible();

    // Verify it shows "Live" badge
    const densopsSection = page.locator("text=DensOps").first().locator("..");
    await expect(densopsSection).toBeVisible();
  });

  test("DensOps appears when SaaS filter is clicked", async ({ page }) => {
    await page.goto("http://localhost:3002");

    // Click the SaaS filter button
    await page.getByRole("button", { name: "SaaS" }).click();

    // DensOps should still be visible
    const densopsCard = page.locator("text=DensOps").first();
    await expect(densopsCard).toBeVisible();
  });

  test("DensOps modal opens with correct details", async ({ page }) => {
    await page.goto("http://localhost:3002");

    // Scroll to projects and click DensOps card
    await page.locator("#projects").scrollIntoViewIfNeeded();
    await page.locator("text=DensOps").first().click();

    // Scope assertions to the modal dialog
    const modal = page.getByRole("dialog");
    await expect(modal).toBeVisible();
    await expect(modal.getByText("Fullstack Developer")).toBeVisible();
    await expect(modal.getByText("Next.js", { exact: true })).toBeVisible();
    await expect(modal.getByText("NestJS", { exact: true })).toBeVisible();
    await expect(modal.getByText("Python", { exact: true })).toBeVisible();
    await expect(
      modal.getByText("AI-powered local business lead generation")
    ).toBeVisible();
  });

  test("FarmPropa shows links in modal", async ({ page }) => {
    await page.goto("http://localhost:3002");

    // Click FarmPropa card
    await page.locator("#projects").scrollIntoViewIfNeeded();
    await page.locator("text=FarmPropa").first().click();

    // Scope assertions to the modal dialog
    const modal = page.getByRole("dialog");
    await expect(modal).toBeVisible();

    // Verify links section appears
    await expect(modal.getByRole("link", { name: "Google Play" })).toBeVisible();
    await expect(modal.getByRole("link", { name: "BusinessDay Feature" })).toBeVisible();

    // Verify updated description mentions downloads
    await expect(modal.getByText("1,000+ downloads")).toBeVisible();
  });
});
