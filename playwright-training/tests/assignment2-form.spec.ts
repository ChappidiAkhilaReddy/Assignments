import { test, expect } from '@playwright/test';

test('assignment2 forms', async ({ page }) => {

// 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
await page.goto("https://demoqa.com/automation-practice-form");

// 2. Wait for Page-load
await page.reload();

// 3. Enter First name and Last name
const firstNameTxtBox= await page.locator('input#firstName');
await firstNameTxtBox.fill('Akhi');

const lastNameTxtBox = await page.locator('input#lastName');
await lastNameTxtBox.fill('Reddy');

// 4. Enter Email
const emailTxtBox = await page.locator('input#userEmail');
await emailTxtBox.fill('akhi@gmail.com');

// 5. Select Gender (Female)
const genderRadiobutton = await page.locator('input#gender-radio-2');
await genderRadiobutton.check();

// 6. Enter mobile number
const mobileNumberTxtBox = await page.locator('input#userNumber');
await mobileNumberTxtBox.fill('5637823490');

// 7.Select DOB (1-Feb-1991)
const dob = await page.locator('input#dateOfBirthInput');
await dob.click();

const selectMonth= await page.locator('select.react-datepicker__month-select');
await selectMonth.selectOption({value:"1"});

const selectYear= await page.locator('select.react-datepicker__year-select');
await selectYear.selectOption({value:"1991"});

const date= await page.locator("//div[contains(@aria-label,'February 1st, 1991')]");
await date.click();

// 8.Search and Select Computer Science and English
const subjectInuput = await page.locator('input#subjectsInput');
await subjectInuput.fill('sci');
await subjectInuput.press('Enter');

await subjectInuput.fill('Eng');
await subjectInuput.press('Enter');

// 9.Select Hobbies as Sports and Reading
const hobbiesSportsCheckbox = await page.locator('//label[text()="Sports"]/preceding-sibling::input');
await hobbiesSportsCheckbox.click();

const hobbiesReadingCheckbox = await page.locator('//label[text()="Reading"]/preceding-sibling::input');
await hobbiesReadingCheckbox.click();

// 10.Upload photo
const uploadPicture = await page.locator('input#uploadPicture');
await uploadPicture.setInputFiles("D:\\Academy Playwright learn\\AutomationTraining\\image.jpg");

//select state and city
const state = await page.locator('input#react-select-3-input');
await state.fill('Rajasthan');
await state.press('Enter');

const city = await page.locator('//div[@id="city"]//input');
await city.click();
await city.fill('Jaipur');
await city.press('Enter');

// 11.Submit Details
const submitButton = await page.locator('button#submit');
await submitButton.click();
});