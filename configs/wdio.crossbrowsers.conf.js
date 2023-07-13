const {config} = require("./wdio.conf")
const crossBrowserConfig = {
    ...config,
    services: [['selenium-standalone', {chrome: 'latest'}]],
    capabilities: [
    {
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--headless', '--window-size=1920,1080']
        },
    },
    {
        maxInstances: 5,
        browserName: 'MicrosoftEdge',
        acceptInsecureCerts: true,
        'ms:edgeOptions': {
            args: ['--headless', '--window-size=1920,1080']
        },
    },
    {
        maxInstances: 5,
        browserName: "firefox",
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
            args: ['--headless', '--window-size=1920,1080']
        },
    },
    ],
}
exports.config = crossBrowserConfig