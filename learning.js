const { element, browser } = require("protractor");
const { expect } = require('chai');
//const { searchButton } = require('btns.js');
const EC = protractor.ExpectedConditions;
const  SearchButtons  = require('./govnomodules/search.button.js');
const  Visibility  = require('./govnomodules/visibility.js');


describe('angularjs homepage todo list', function() {
  it('should add a todo', async function() {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://gs.statcounter.com/');
        const searchButtons = new SearchButtons();
        const govnoVisibility = new Visibility();
        browser.sleep(5000);

    });
});