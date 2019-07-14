
import {browser, by, element, ExpectedConditions}  from 'protractor';

export class SignInPage {

    //Locators and URLs
    readonly CorrectURL = "https://account.bbc.com";
    readonly WrongURL = "https://google.com";
    readonly BBCLogo = element(by.css('.page__content>.header__logo'));
    readonly SignInButton =  element(by.id('submit-button'));
    readonly UsernameField = element(by.id('user-identifier-input'));
    readonly PasswordField = element(by.id('password-input'));     
    readonly RegisterNowHyperlink = element(by.xpath("//*[@class='link link--primary']"));
    readonly GeneralErrorMessage = element(by.css(".form-message--general>.form-message__text"));
    readonly UsernameErrorMessage = element(by.css(".form-message--username>.form-message__text"));
    readonly PasswordErrorMessage = element(by.css(".form-message--password>.form-message__text")); 

    //Actions can be done on Homepage
    public Open() {
        return browser.get(this.CorrectURL) as Promise<any>;
    }

    public OpenWrong() {
        return browser.get(this.WrongURL) as Promise<any>;
    }

    public Loaded() {  
        return browser.
        wait(ExpectedConditions.
        presenceOf(this.BBCLogo), 5000, 
        'Oops! Looks like you have opened wrong page - BBC Logo is missing!') as Promise<boolean>;
    }

    public SignIn() {
        return this.SignInButton.click() as Promise<any>;
    }

    public EnterUsername(username: string) {
        return this.UsernameField.sendKeys(username) as Promise<any>;
    }

    public EnterPassword(password: string) {
        return this.PasswordField.sendKeys(password) as Promise<any>;
    }

    public RegisterNow() {
        return this.RegisterNowHyperlink.click() as Promise<any>;
    }
}