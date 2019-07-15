import {SignInPage} from "../pages/signinpage.po";

import { browser, ExpectedConditions } from 'protractor';


export = function signinpageSteps() {

    let signinpage = new SignInPage;

    //1st Test Steps

    this.Given(/^I Open BBC SignInPage$/, () => {
        signinpage.Open();
        browser.driver.manage().window().maximize();
    });

    
    this.Then(/^I Verify BBC logo visible$/, () => {
        signinpage.Loaded();
    });


    //2nd Test Steps

    this.Given(/^I Open Wrong Page$/, () => {
        signinpage.OpenWrong();
        browser.driver.manage().window().maximize();
    });

    this.Then(/^I Verify BBC logo is missing$/, () => {
        var EC = ExpectedConditions;
        browser.wait(EC.not(EC.presenceOf(signinpage.BBCLogo)), 5000); 
    });

    //3rd Test Steps

    this.Then(/^I Click SignIn Button$/, () => {
        signinpage.SignIn(); 
    });
    
    this.Then(/^I See General Error Message$/, () => {
        var EC = ExpectedConditions;
        browser.wait(EC.presenceOf(signinpage.GeneralErrorMessage), 5000); 
    });

    this.Then(/^I See Username Error Message$/, () => {
        var EC = ExpectedConditions;
        browser.wait(EC.presenceOf(signinpage.UsernameErrorMessage), 5000); 
    });

    this.Then(/^I See Password Error Message$/, () => {
        var EC = ExpectedConditions;
        browser.wait(EC.presenceOf(signinpage.PasswordErrorMessage), 5000); 
    });

    //4th Test Steps

    this.Then(/^I Enter (.*) into Username Field$/, (username: string) => {
        var EC = ExpectedConditions;
        browser.wait(EC.presenceOf(signinpage.UsernameField), 5000).then(() => {
            signinpage.UsernameField.sendKeys(username);
        }); 
    });

    this.Then(/^I Enter (.*) into Password Field$/, (password: string) => {
        var EC = ExpectedConditions;
        browser.wait(EC.presenceOf(signinpage.PasswordField), 5000).then(() => {
            signinpage.PasswordField.sendKeys(password);
        }); 
    });

    //5th Test Steps
    this.Then(/^I Click Register Now Hyperlink$/, () => {
        var EC = ExpectedConditions;
        browser.wait(EC.presenceOf(signinpage.RegisterNowHyperlink), 5000).then(() => {
            signinpage.RegisterNowHyperlink.click();
        }); 
    });
};