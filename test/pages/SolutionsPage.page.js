const seeIndustriesButton = '[href="#industries"]>span'
const seeUseCasesButton = '[href="#use-cases"]>span'
const healthcareButton = 'a[href="/solutions/healthcare"]'
const accountNotificationWindow = 'ul>li:first-child>div'

class SolutionsPage {
    async clickSeeIndustriesButton() {
        await $(seeIndustriesButton).waitForClickable()
        await $(seeIndustriesButton).click()
    }
    async scrollToSeeIndustriesButton() {
        await $(seeIndustriesButton).scrollIntoView()
    }
    async clickSeeUseCasesButton() {
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