import { Page, Locator, expect } from '@playwright/test'

export class WebCommons {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Common method to generate Locator from a selector (locator string)
    /*1. async is not needed here
    page.locator() is synchronous.*/
    getLocator(locator: string): Locator {
        return this.page.locator(locator);
    }

    //Common method to launch application
    async launchApplication(url: string, title?: string): Promise<void> {
        await this.page.goto(url);
        if (title) {
            await expect(this.page).toHaveTitle(title);
        }
    }

    //Common method to scroll to an element.
    async scrollToElement(locator: string) : Promise<void>  {
        const element = this.getLocator(locator);
        await element.scrollIntoViewIfNeeded();
    }

    //Common method to perform click on an element
    async clickElement(locator: string): Promise<void>  {
        const element = this.getLocator(locator);
        await this.scrollToElement(locator);
        await element.click();
    }

    //Common method to perform double click on an element
    async doubleClickElement(locator: string): Promise<void>  {
        const element = this.getLocator(locator);
        await this.scrollToElement(locator);
        await element.dblclick();
    }

    //Common method to perform right click on an element
    async rightClickElement(locator: string): Promise<void>  {
        const element = this.getLocator(locator);
        await this.scrollToElement(locator);
        await element.click({button:'right'});
    }

    //Common method to perform hover on an element
    async hoverElement(locator: string): Promise<void>  {
        const element = this.getLocator(locator);
        await this.scrollToElement(locator);
        await element.hover();
    }

    //Common method to perform force click on an element
    async forceClickElement(locator: string): Promise<void>  {
        const element = this.getLocator(locator);
        await this.scrollToElement(locator);
        await element.click({force:true});
    }

    //Common method to clear text into an element
    async clearText(locator: string): Promise<void>  {
        const element = this.getLocator(locator);
        await this.scrollToElement(locator);
        await element.clear();
    }

    //Common method to type text into an element
    async enterText(locator: string,text:string): Promise<void>  {
        const element = this.getLocator(locator);
        await this.scrollToElement(locator);
        //await this.clearText(locator); --fill method clears text before entering text
        await element.fill(text);
    }

    //Common method to get text value entered into textbox
    async getText(locator: string): Promise<string>  {
        const element = this.getLocator(locator);
        await this.scrollToElement(locator);
        return await element.inputValue();
    }

    //Common method to press a key on an element
    async pressKey(locator: string,key:string): Promise<void>  {
        const element = this.getLocator(locator);
        await this.scrollToElement(locator);
        await element.press(key);
    }

    //Common method to select an option from dropdown
    async selectOption(locator: string,option:string): Promise<void>  {
        const element = this.getLocator(locator);
        await this.scrollToElement(locator);
        await element.selectOption(option);
    }

    //Common method to get text from an element
    async getElementText(locator: string): Promise<string | null>  {
        const element = this.getLocator(locator);
        await this.scrollToElement(locator);
        return await element.textContent();
    }

    //Common method to get attribute  from an element
    async getAttributeValue(locator: string,attribute:string): Promise<string | null>  {
        const element = this.getLocator(locator);
        await this.scrollToElement(locator);
        return await element.getAttribute(attribute);
    }

    //Common method to upload file to an element
    async uploadFile(locator: string,filePath:string): Promise<void>  {
        const element = this.getLocator(locator);
        await this.scrollToElement(locator);
        await element.setInputFiles(filePath);
    }

    //Common method to check if an element is visible
    async isElementVisible(locator: string): Promise<void>  {
        const element = this.getLocator(locator);
        await expect(element).toBeVisible();
    }

    //Common method to check if an element is enabled
    async isElementEnabled(locator: string): Promise<void>  {
        const element = this.getLocator(locator);
        await expect(element).toBeEnabled();
    }

    //Common method to check if an element is disappeared/Hidden
    async isElementHidden(locator: string): Promise<void>  {
        const element = this.getLocator(locator);
        await expect(element).toBeHidden();
    }

    //Common method to handle alert pop up
    async handleAlert(action:'accept' | 'dismiss', textToEnter?:string):Promise<void>{
        this.page.on('dialog', async(dialog)=>{
            if(action ==='accept'){
                await dialog.accept(textToEnter);
            }else{
                await dialog.dismiss();
            }
        } );


    }

    //common method to compare text values
    async compareText(actual:string | null ,expected:string){
        if(!(actual?.includes(expected))){
            throw new Error('Expected value is ${expected}, but found ${actual}');
        }
    }

    //Verify element having text value
    async verifyElementText(locator: string, expectedText:string){
        const element = await this.getLocator(locator);
        await expect(element).toHaveText(expectedText);
    }

    //wait for element

    async waitForElement(locator: string, ){
        const element = await this.getLocator(locator);
        await element.waitFor();
    }

   

}