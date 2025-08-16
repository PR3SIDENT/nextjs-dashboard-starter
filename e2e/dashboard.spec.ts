import { test, expect } from '@playwright/test'

test('dashboard loads and sidebar renders', async ({ page }) => {
  await page.goto('/')

  // Check if the page loads
  await expect(page).toHaveTitle(/Carline Dashboard/)

  // Check if sidebar navigation items are present
  await expect(page.getByText('Platform')).toBeVisible()
  await expect(page.getByText('Projects')).toBeVisible()
  await expect(page.getByText('Playground')).toBeVisible()

  // Check if breadcrumb is present
  await expect(page.getByText('Data Fetching')).toBeVisible()

  // Check if sidebar toggle works
  const sidebarTrigger = page.locator('[data-sidebar="trigger"]')
  await expect(sidebarTrigger).toBeVisible()

  // Test sidebar collapse/expand
  await sidebarTrigger.click()
  // Wait for animation
  await page.waitForTimeout(300)

  await sidebarTrigger.click()
  // Wait for animation
  await page.waitForTimeout(300)

  // Verify sidebar items are still visible after toggling
  await expect(page.getByText('Platform')).toBeVisible()
})
