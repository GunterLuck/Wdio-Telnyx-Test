const submitButton = 'button[type="button"]>svg>g>path'

class Coockies {
    async acceptCookie(){
        if (await ($(submitButton).isDisplayedInViewport()) == true){
            await $(submitButton).click();
        }
    }
}

module.exports = new Coockies()