const addContext = require('mochawesome/addContext');
const { describe, after, before, it } = require('mocha');
require('chai');
require('chai-as-promised');
let App;

describe('TEST THE WINDOW', function() {
    const ApplicationController = require('../bootstrap');

    after(async () => {
        try {
            await App.sleep(2000);
            await App.stop();
        } catch (e) {}
    });
    before(async () => {
        App = new ApplicationController();
        await App.start();
        await App.sleep(3000);
    });

    it("A window with the 'User Management' title is visible and focused", async function() {
        await App.sleep(2000);
        App.client
            .waitUntilWindowLoaded()
            .getTitle()
            .should.eventually.equal('User Management');
    });

    it("Check the color of the 'Like' button on the first entry", async function() {
        await App.sleep(1000);
        let elem = await App.client.element('#table > tbody > tr:nth-child(1) > td:nth-child(6) > a.like');
        App.client.elementIdCssProperty(elem.value.ELEMENT, 'color').should.eventually.equal('rgba(0, 123, 255, 1)');
    });

    it("Click the 'Like' button on the second entry", async function() {
        await App.sleep(1000);
        App.client.element('#table > tbody > tr:nth-child(2) > td:nth-child(6) > a.like').click();
    });

    it("Check the color of the 'Like' button on the first entry", async function() {
        await App.sleep(1000);
        let elem = await App.client.element('#table > tbody > tr:nth-child(1) > td:nth-child(6) > a.like');
        App.client.elementIdCssProperty(elem.value.ELEMENT, 'color').should.eventually.equal('rgba(0, 123, 255, 1)');
    });

    it("Check if the 'Like' button on the second entry has the class 'liked'", async function() {
        await App.sleep(1000);
        App.client.element('#table > tbody > tr:nth-child(2) > td:nth-child(6) > a.like').getAttribute('class').should.eventually.match('liked');

        addContext(this, {
            title: 'Classes on the button',
            value: {
                classes: await App.client.element('#table > tbody > tr:nth-child(2) > td:nth-child(6) > a.like').getAttribute('class'),
            },
        });
    });

    // TODO: Fill in the missing steps down below :)
    it("Search for any entry which contains value '160'", async function() {

    });

    it("Delete the entry from the search result & remove the search input text", async function() {

    });

    it("Check if any items are present after the search", async function() {

    });

    it("Check if there are 10 rows per page", async function() {

    });

    it("Delete the first 5 rows", async function() {

    });

    it("Check if there are 5 rows left", async function() {

    });

    it("Hide the ID field", async function() {

    });

    it("Show the ID field", async function() {

    });

    it("Sort the table by 'Username'", async function() {

    });
    // TODO: Continue here with the other steps
});
