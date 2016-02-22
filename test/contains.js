'use strict';

const chai = require('chai');
const expect = chai.expect;
require('../index');

describe('contains', () => {
    it('should return true if an array contains a value', () => {
        const res = [1,2,3].contains(1);
        expect(res).to.be.true;
    });

    it('should return false if an array does not contain a value', () => {
        expect([1,2,3].contains(5)).to.be.false;
    })
});