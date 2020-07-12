# Cypress-Cucumber-Samples
Cypress + Cucumber + BrowserStack

## Setup
* Clone the repo
* Install dependencies `npm install`
* In order to run the sample test on your local machine ensure that you have the supported browsers installed (Chrome, Firefox or Microsoft Edge).
* In order to run the sample test on BrowserStack you need to update the file browserstack.json with your username and access key.

## Quick Start
Run Cypress + Cucumber sample test locally on your machine:

* Select Chrome, Firefox or Microsoft Edge browser
```bash
npm run cy:open
```
* Use Electron browser (headless)
```bash
npm run cy:headless
```

Run Cypress + Cucumber sample test suite on BrowserStack 
```bash
npm run cy:browserstack
```

## Documentation

Here are a few important links to get you started and help you  successfully integrate the CLI into your CI/CD pipelines.

-   [CLI Reference](https://browserstack.com/docs/automate/cypress#cli-reference)
-   [List of supported browsers & OS](https://browserstack.com/list-of-browsers-and-platforms?product=cypress_testing)
-   [Run Tests in Localhost / Dev / Staging Environments](https://browserstack.com/docs/automate/cypress#run-tests-in-dev-environments)
-   [Run Tests in Parallel](https://browserstack.com/docs/automate/cypress#run-tests-in-parallel)
-   [Run Tests in CI/CD](https://browserstack.com/docs/automate/cypress#run-tests-in-cicd)


