import {browser, by, element, ExpectedConditions, promise}  from 'protractor';

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

    public Open(): promise.Promise<any> {
        return browser.get(this.CorrectURL);
    }

    public SubmitAge(): promise.Promise<void> {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.Over13Button), 10000).then(() => {
            this.Over13Button.click();
        });
    }

    public FillInBirthData(day: string, month: string, year: string): promise.Promise<void> {
        return this.FillInBirthDay(day).then(() => {
            this.FillInBirthMonth(month).then(() => {
                this.FillInBirthYear(year)
            })
        });
    } 

    public FillInBirthDay(day: string): promise.Promise<void> {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.DayInputField), 5000).then(() => {
            this.DayInputField.sendKeys(day);
        });
    } 

    public FillInBirthMonth(month: string): promise.Promise<void> {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.MonthInputField), 5000).then(() => {
            this.MonthInputField.sendKeys(month);
        });
    }

    public FillInBirthYear(year: string): promise.Promise<void> {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.YearInputField), 5000).then(() => {
            this.YearInputField.sendKeys(year);
        });
    }

    public FillInUserData(email: string, password: string): promise.Promise<void> {
        return this.FillInEmail(email).then(() => {
            this.FillInPassword(password).then(() => {
                browser.sleep(1000);
            })
        });
    }

    public FillInEmail(email: string): promise.Promise<void> {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.EmailField), 5000).then(() => {
            this.EmailField.sendKeys(email);
        });
    }

    public FillInPassword(password: string): promise.Promise<void> {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.PasswordField), 5000).then(() => {
            this.PasswordField.sendKeys(password);
        });
    }

    public Submit(): promise.Promise<void> {
        var EC = ExpectedConditions;
        return browser.sleep(500).then(() => {
            browser.wait(EC.presenceOf(this.SubmitButton), 10000).then(() => {
                this.SubmitButton.click();
            })
        });
    }

    public NoThanks(): promise.Promise<void> {
        var EC = ExpectedConditions;
        return browser.sleep(1000).then(() => {
            browser.wait(EC.presenceOf(this.NoThanksButton), 10000).then(() => {
                this.NoThanksButton.click()
                })
        });
    }

    public RegisteredSuccessfully(): promise.Promise<void> {
        var EC = ExpectedConditions;
        return browser.wait(EC.presenceOf(this.HeaderAccountIcon), 10000);
    }
}