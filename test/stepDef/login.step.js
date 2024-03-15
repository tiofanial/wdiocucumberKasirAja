const {Given, When, Then} = require("@wdio/cucumber-framework")
const Page = require("../pages/page")
const LoginPage = require('../pages/login')
const HomepagePage = require('../pages/homepage')

Given(/^I open KasirAja website$/, async () => {
    await Page.open('/');
})

When(/^I login with invalid username$/, async () => {
    await LoginPage.login('invalid_user','123456')
})

Then(/^I should see must be a valid email message$/, async () => {
    await LoginPage.assertErrorMessage('"email" must be a valid email')
})

When(/^I login with invalid password$/, async () => {
    await LoginPage.login('serbaada2@gmail.com','invalid_password')
})

Then(/^I should see an error message$/, async () => {
    await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah')
})


When(/^I login with valid credentials$/, async () => {
    await LoginPage.login('serbaada2@gmail.com','123456')
})

Then(/^I should be on the dashboard homepage$/, async () => {
    await HomepagePage.assertHomepageUrl();
})

// // TDD Scenario, harus nempel antara message terakhir dengan$
// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username,password)
// })
