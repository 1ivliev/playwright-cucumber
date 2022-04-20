const {Given} = require("@cucumber/cucumber");

Given("Bob opens Qase.io website", { timeout: 60 * 1000 }, async function () {
    await this.openUrl('https://qase.io/');
});
