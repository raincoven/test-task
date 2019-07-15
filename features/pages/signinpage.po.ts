
import {browser, by, element, ExpectedConditions, promise}  from 'protractor';

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
    public Open(): promise.Promise<void> {
        return browser.get(this.CorrectURL);
    }

    public OpenWrong(): promise.Promise<void> {
        return browser.get(this.WrongURL);
    }

    public Loaded(): promise.Promise<void> {  
        return browser.
        wait(ExpectedConditions.
        presenceOf(this.BBCLogo), 5000, 
        'Oops! Looks like you have opened wrong page - BBC Logo is missing!');
    }

    public SignIn(): promise.Promise<void> {
        return this.SignInButton.click();
    }

    public EnterUsername(username: string): promise.Promise<void> {
        return this.UsernameField.sendKeys(username);
    }

    public EnterPassword(password: string): promise.Promise<void> {
        return this.PasswordField.sendKeys(password);
    }

    public RegisterNow(): promise.Promise<void> {
        return this.RegisterNowHyperlink.click();
    }
}