import {browser, by, element, ExpectedConditions}  from 'protractor';

export class RegisterPage {

    //Locators and URLs
    readonly CorrectURL = "https://account.bbc.com/register";
    readonly Over13Button = element(by.xpath("(//*[@class='button']/span)[2]"));
    readonly DayInputField = element(by.id("day-input"));
    readonly MonthInputField = element(by.id("month-input"));
    readonly YearInputField = element(by.id("year-input"));
    readonly EmailField = element(by.id("user-identifier-input"));
    readonly PasswordField = element(by.id("password-input"));
    readonly SubmitButton = element(by.id("submit-button"));
    readonly NoThanksButton = element(by.xpath("//*[@id='optOut']/.."));
    readonly HeaderAccountIcon = element(by.id("idcta-link"));

    public Open() {
        return browser.get(this.CorrectURL) as Promise<any>;
    }

    public SubmitAge() {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.Over13Button), 10000).then(() => {
            this.Over13Button.click();
        }) as Promise<any>;
    }

    public FillInBirthData(day: string, month: string, year: string) {
        return this.FillInBirthDay(day).then(() => {
            this.FillInBirthMonth(month).then(() => {
                this.FillInBirthYear(year)
            })
        }) as Promise<any>;
    } 

    public FillInBirthDay(day: string) {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.DayInputField), 5000).then(() => {
            this.DayInputField.sendKeys(day);
        }) as Promise<any>;
    } 

    public FillInBirthMonth(month: string) {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.MonthInputField), 5000).then(() => {
            this.MonthInputField.sendKeys(month);
        }) as Promise<any>;
    }

    public FillInBirthYear(year: string) {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.YearInputField), 5000).then(() => {
            this.YearInputField.sendKeys(year);
        }) as Promise<any>;
    }

    public FillInUserData(email: string, password: string) {
        return this.FillInEmail(email).then(() => {
            this.FillInPassword(password).then(() => {
                browser.sleep(1000);
            })
        }) as Promise<any>;
    }

    public FillInEmail(email: string) {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.EmailField), 5000).then(() => {
            this.EmailField.sendKeys(email);
        }) as Promise<any>;
    }

    public FillInPassword(password: string) {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.PasswordField), 5000).then(() => {
            this.PasswordField.sendKeys(password);
        }) as Promise<any>;
    }

    public Submit() {
        var EC = ExpectedConditions;
        return browser.sleep(500).then(() => {
            browser.wait(EC.presenceOf(this.SubmitButton), 10000).then(() => {
                this.SubmitButton.click();
            })
        }) as Promise<any>;
    }

    public NoThanks() {
        var EC = ExpectedConditions;
        return browser.sleep(1000).then(() => {
            browser.wait(EC.presenceOf(this.NoThanksButton), 10000).then(() => {
                this.NoThanksButton.click()
                })
        }) as Promise<any>;
    }

    public RegisteredSuccessfully() {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.HeaderAccountIcon), 10000) as Promise<any>;
    }
}