'use strict';

const chai = require('chai');
const expect = chai.expect;
require('../index');

describe('adjust', () => {
    it('should apply a callback to an array item by index', () => {
        const res = [1,2,3].adjust(1, (x) => x+1);
        expect(res[1]).to.equal(3);
    });

    it('should throw an error if idx is not supplied', () => {
        expect(() => {[1].adjust()}).to.throw('Index and callback must be defined');
    })
});