import { test, expect } from '@playwright/test';

test('assignment1', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //1.verify application logo is displayed
    const logo = page.locator('img.logo');
    await expect(logo).toBeDisabled;

    //2.Verify application caption displayed as "Experience the difference"
    const caption = page.locator('p.caption');
    await expect(caption).toHaveText('Experience the difference');

    // 4.Enter invalid username
    const userName = page.locator('//input[@name="username"]');
    await userName.fill('xy798z');

    // 5.Enter empty Password
    const password = page.locator('//input[@name="password"]');
    await password.fill('');

    // 6.Click on login button
    const loginbtn = page.locator('input.button');
    await loginbtn.click();

    // 7.Verify the error message "Please enter a username and password."
    const errormsg = page.locator('p.error');
    const actualerrormsg = await errormsg.textContent();
    console.log(actualerrormsg);
    const expectederrormsg = "Please enter a username and password.";
    await expect(actualerrormsg).toBe(expectederrormsg);

    // 8.Click on admin page link
    const adminPage = await page.locator('//ul[@class="leftmenu"]/li/a[contains(@href,"admin")]');
    await adminPage.click();

    // 9.select the option "soap" from dba mode radio button
    const soapRadiobtn = await page.locator('input#accessMode1');
    await adminPage.click();

    // 10.Scroll to element dropdown
    const scrollToEelement = await page.locator('//form[@id="adminForm"]/table[3]//tr[4]');
    await scrollToEelement.scrollIntoViewIfNeeded();

    // 11.Select the option web service from the dropdown
    const selectWebServicedropDown = await page.locator('select#loanProvider');
    await selectWebServicedropDown.selectOption({ index: 1 });

    // 12.click on submit button
    const submit = page.locator('form#adminForm>input.button');
    await submit.click();

    // 13.verify submission is successful by validating success message
    const successMsgValidation = await page.locator('//div[@id="rightPanel"]/p/b');
    let text = await successMsgValidation.textContent();
    await expect(text).toBe('Settings saved successfully.');

    // 14.Click on services page link
    const servicesPageLink = await page.locator('ul.leftmenu>li>a[href*="services"]');
    await servicesPageLink.click();

    // 15.wait for service page
    const bookservicesHeader = await page.locator('//span[text()="Bookstore services:"]');
    await expect(bookservicesHeader).toBeVisible();

    // 16.Scroll down till bookstore services table
    await bookservicesHeader.scrollIntoViewIfNeeded();

    // 17.get total rows of books store services table
    const rows = await page.locator("//div[@id='rightPanel']/table[2]/tbody/tr");
    const rowCount = await rows.count();

    // 18.get total columns of books store services table
    const columns = await page.locator("//div[@id='rightPanel']/table[2]/tbody/tr[1]/td");
    const colCount = await columns.count();

    // 19.Print table data (row wise and column wise data)
    for (let r: number = 1; r <= rowCount; r++) {
        for (let c: number = 1; c <= colCount; c++) {
            const cell = await page.locator(`//div[@id='rightPanel']/table[2]/tbody/tr[${r}]/td[${c}]`);
            console.log(`Value at row ${r} and column ${c} is : ` + await cell.textContent());
        }

    }
});

