'use strict';

const chai = require('chai');
const expect = chai.expect;
require('../index');

describe('take', () => {
    it('should return the first x elements', () => {
        const res = [1,2,3,4,5,6].take(3);
        expect(res).to.be.length(3);
    });

    it('should return up to the last element if given a larger count than exists', () => {
        const res = [1,2,3].take(6);
        expect(res).to.be.length(3);
    });

    it('should return and empty array if array is empty', () => {
        const res = [].take(6);
        expect(res).to.be.length(0);
    });
});