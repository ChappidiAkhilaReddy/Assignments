import { test, expect } from '@playwright/test';

test('Assignment3 Alerts', async ({ page }) => {

    // 1. Enter URL and Launch the application (https://demoqa.com/alerts)
    await page.goto("https://demoqa.com/alerts");

    // 2. Locate Alert buttons to trigger the alerts
    // const alertFrameWindows = await page.locator('//div[text()="Alerts, Frame & Windows"]');
    // await alertFrameWindows.click();
    // const alertbtn = await page.locator('//a[@href="/alerts"]/span');
    // await alertbtn.click();

    // 3. Click on the information alert and copy the alert message and then select OK button
    page.once('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    });
    const infoAlert = await page.locator("button#alertButton");
    await infoAlert.click();   

    // 4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.
    page.once('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.dismiss();
    });
    const cancelAlert = await page.locator("button#confirmButton");
    await cancelAlert.click();

    // 5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.
    page.once('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept('Akhi');
    });
    const enterTextAlert = await page.locator("button#promtButton");
    await enterTextAlert.click();
});
