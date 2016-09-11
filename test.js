'use strict';

require('mocha-generators').install();

const expect = require('chai').expect;
const nightmare = require('nightmare');

describe('Test blog content', function() {
    this.timeout(10000);

    let night;

    before('setup nightmare instance', function() {
        night = nightmare({ show: true });
    });

    after('teardown nightmare instance', function*() {
        yield night.end();
    });

    describe('homepage', function() {
        before('go to page', function*() {
            yield night.goto('http://blog.thib.me/');
        });

        it('page title', function*() {
            const title = yield night.evaluate(() => document.querySelector('header h1').innerText);

            expect(title).to.equal('thibaudcolas\'s Blog');
        });

        it('articles on homepage', function*() {
            const nbArticles = yield night.evaluate(() => document.querySelectorAll('.blog-index h1').length);

            expect(nbArticles).to.equal(5);
        });
    });
});
