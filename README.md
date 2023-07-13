# Wdio-Telnyx-Test

This project do https://telnyx.com/ part of the functionality e2e tests on WebdriverIO mocha framework with docker.

Allure is used as a reporter in this project.

# How to start

The project used [Node.js v18.15.0.](https://nodejs.org/en/blog/release/v18.15.0)

Download or clone a project

To clone a project with `GIT`, call `git clone https://github.com/GunterLuck/Wdio-Telnyx-Test.git`

To install dependencies , call `npm i`

## Run

To run test in headed mode, call `npm run wdio`

To run with allure reporter in headless mode on chrome and edge bowsers, call `npm run wdio-all-browsers`

To check allure results, call `npm run report-generate` and `npm run report-open`

To see the results of the allure reporter, click [here](https://gunterluck.github.io/Wdio-Telnyx-Test/)