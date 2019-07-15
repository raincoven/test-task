# Test Task Automation Framework
Hi, this my test task made with SerenityJS+Protractor+Cucumber. For more info about it you can see this:
https://serenity-js.org

Why SerenityJS? Because it provides flexible toolkit for NodeJS(TypeScript to be exact) automation on the go with multiple patterns. I chose PageObject pattern because of original easy level of testing application (BBC Pages). In case of more "heavy" one apps better to use ScreenPlay pattern which gives much more profits in calculation of time-profit. And what is also good - PageObjects in SerenityJS can be easily converted into ScreenPlay with Actors, Tasks, Interactions (these all are core abstract things in SerenityJS which allows to manipulate objects like browsers, users, actions to peform and etc).

# Installation

1. Install NodeJS, Java and Chrome browser on your system
2. Clone repo
3. (OPTIONAL) I suggest to use Visual Studio Code and run all commands in its powershell/bash terminal in the root of project folder (will work on Windows/Linux/macOS)
4. run "npm i"
5. run "npm run postinstall"
6. (OPTIONAL) in Scenario 5 of features/signinpage.feature change email address in step

- Then I Enter (put here any random e-mail) as Username (33 string)

- That is needed because each time you register new e-mail you cannot re-use old one in this test 

7. run "npm run tests"

That's it! It will launch tests and in console output you will see logs which signalize about test/step pass/fail status. 

# Project Structure
- features folder. Contains .feature file with tests and also "pages" folder with .po.ts PageObject files and "step_definitions" folder with .step.ts files used for defining Gherkin steps used in .feature files.
- package.json file. System file used for dependencies installation and custom scripts definition
- tsconfig.json file. TypeScript compiler configuration file. 
- protractor.conf.js file. Protractor (Selenium Webdriver) configuration file used for specifying which .ts and .feature files should be used and which browser should used.


