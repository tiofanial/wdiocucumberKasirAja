// const Page = require('./page');

class HomepagePage{

    get homepagePageUrl(){
        return 'https://kasirdemo.belajarqa.com/dashboard';
    }

    async assertHomepageUrl(){
        await expect(browser).toHaveUrl(this.homepagePageUrl)
    }
}

module.exports = new HomepagePage();