// const Page = require('./page')

class LoginPage{
    get usernameInput(){
        return $('#email');
        // return $('//*[@id="login"]')
    }

    get passwordInput(){
        return $('#password');
    }

    get loginButton(){
        return $('button=login');
    }

    get errorMsg(){
        return $('//*[@role="alert"]');
    }

    async login(username, password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage(){
        return this.errorMsg.getText();
    }

}
module.exports = new LoginPage();