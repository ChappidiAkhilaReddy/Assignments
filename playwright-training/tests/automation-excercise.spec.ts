import{test,expect} from '@playwright/test';

test('automating automationexcercise url', async({page})=>{

//Navigate to url 'http://automationexercise.com'
await page.goto('http://automationexercise.com');

//Verify that home page is visible successfully
//Click on 'Signup / Login' button
const signbtn = await page.getByText(" Signup / Login");
await signbtn.click();

//Verify 'New User Signup!' is visible
const signupForm = await page.locator('//div[@class="signup-form"]/h2');
await expect(signupForm).toBeVisible();

// Enter name and email address
const nameTxtBox = await page.getByPlaceholder("Name");
await nameTxtBox.fill('Akhi');

const emailTxtBox = await page.locator('//form[@action="/signup"]/input[@type="email"]');
await emailTxtBox.fill('akhila4545@gmail.com');

//Click 'Signup' button
const submitBtn = await page.getByRole('button',{name:'Signup'});
await submitBtn.click();

//Verify that 'ENTER ACCOUNT INFORMATION' is visible
const enterAccountInfo = await page.getByText("Enter Account Information")
await expect(enterAccountInfo).toBeVisible();

//Fill details: Title, Name, Email, Password, Date of birth
const titileradiobtn = await page.locator("input#id_gender2");
await titileradiobtn.check();

const passTxtBtn = await page.locator("input#password");
await passTxtBtn.fill('akhila4444');

const dayDropDown = await page.locator("select#days");
await dayDropDown.selectOption({value:"4"});

const monthsDropDown = await page.locator("select#months");
await monthsDropDown.selectOption({index:5});

const yearsDropDown = await page.locator("select#years");
await yearsDropDown.selectOption({label:"2000"});

//Select checkbox 'Sign up for our newsletter!'
const newsletterCheckBox = await page.locator("input#newsletter");
await newsletterCheckBox.check();

//Select checkbox 'Receive special offers from our partners!'
const receiveSpecialOffersCheckBox = await page.locator("input#optin");
await receiveSpecialOffersCheckBox.check();

//Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
const firstNameTxtbox = await page.locator("input#first_name").fill("Akhila");

const lastNameTxtbox  = await page.locator("input#last_name").fill("Reddy");

const companyTxtbox = await page.locator("input#company").fill("SR");

const addressTxtbox = await page.locator("input#address1").fill("Ganesh nagar");

const address2Txtbox = await page.locator("input#address2").fill("Road no: 10");

const contryDropDown = await page.locator("select#country").selectOption({value:"India"});

const stateTxtbox = await page.locator("input#state").fill("Telangana");

const cityTxtbox = await page.locator("input#city").fill("Sanagreddy");

const zipCodeTxtbox = await page.locator("input#zipcode").fill("502441");

const mobileNumberTxtbox = await page.locator("input#mobile_number").fill("7989502441");

//Click 'Create Account button'
const createAccountButton=await page.locator('//button[text()="Create Account"]').click();

//Verify that 'ACCOUNT CREATED!' is visible
const accountCreatedTxt = await page.locator('//h2[@class="title text-center"]/b');
await expect(accountCreatedTxt).toBeVisible();

//Click 'Continue' button
const continueButton =await page.locator("//a[text()='Continue']");
await continueButton.click();

// Verify that 'Logged in as username' is visible
const loggedInAs = await page.locator('//i[@class="fa fa-user"]/ancestor::a');
await expect(loggedInAs).toBeVisible();

//Click 'Delete Account' button
const DeleteAccount = await page.locator('//a[@href="/delete_account"]').click();

//Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

const accountDeletedTxt = await page.locator('//h2[@class="title text-center"]/b');
await expect(accountDeletedTxt).toBeVisible();

const continueClick =await page.locator("//a[text()='Continue']").click();

});