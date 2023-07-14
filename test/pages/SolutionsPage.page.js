const seeIndustriesButton = 'a[href="#industries"]>span>span'
const seeUseCasesButton = 'a[href="#use-cases"]>span>span'
const healthcareButton = 'a[href="/solutions/healthcare"]>div>div:nth-child(2)'
const accountNotificationWindow = 'div>ul>li:first-child>div>div~h3'

class SolutionsPage {
    async clickSeeIndustriesButton() {
        await $(seeIndustriesButton).waitForClickable(20000)
        browser.execute('arguments[0].click();', $(seeIndustriesButton));
    }
    async scrollToSeeIndustriesButton() {
        await $(seeIndustriesButton).waitForDisplayed(20000)
        await $(seeIndustriesButton).scrollIntoView()
    }
    async clickSeeUseCasesButton() {
        await $(seeUseCasesButton).waitForDisplayed(20000)
        await $(seeUseCasesButton).click()
    }
    async checkHealthcareButtonVisibility() {
        await $(healthcareButton).waitForDisplayed(20000)
        await expect (await $(healthcareButton)).toBeDisplayed() == true
    }
    async checkAccountNotificationWindowVisibility() {
        await $(accountNotificationWindow).waitForDisplayed(20000)
        await expect (await $(accountNotificationWindow)).toBeDisplayed() == true
    }
}

module.exports = new SolutionsPage()