import {RegisterPage} from "../pages/registerpage.po";
import {browser, ExpectedConditions} from "protractor";

export = function registerPageSteps() {

    let registerpage = new RegisterPage;

    this.Then(/^I Click Over 13 Button$/, () => {
        registerpage.SubmitAge();
    });

    this.Then(/^I Enter (.*) as Day (.*) as Month (.*) as Year$/, (day: string, month: string, year: string) => {
        registerpage.FillInBirthData(day, month, year);
    });

    this.Then(/^I Submit Form$/, () => {
        registerpage.Submit();
    });

    this.Then(/^I Enter (.*) as Username$/, (email: string) => {
        registerpage.FillInEmail(email);
    });

    this.Then(/^I Enter (.*) as Password$/, (password: string) => {
        registerpage.FillInPassword(password);
    });

    this.Then(/^I See No Thanks$/, () => {
        var EC = ExpectedConditions;
        browser.wait(EC.presenceOf(registerpage.NoThanksButton), 10000)
    });

    this.Then(/^I See Account Icon in Header$/, () => {
        registerpage.RegisteredSuccessfully();
        browser.sleep(2000);
    });



}