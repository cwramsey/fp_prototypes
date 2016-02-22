'use strict';

const chai = require('chai');
const expect = chai.expect;
require('../index');

describe('tail', () => {
    it('should return all but the first element in an array', () => {
        const res = [0,1,2,3].tail();
        expect(res).to.be.length(3);
        expect(res).to.not.contain(0);
    });

    it('should return empty if length === 1', () => {
        const res = [0].tail();
        expect(res).to.be.length(0);
    });

    it('should return an empty array if array is empty', () => {
        const res = [].tail();
        expect(res).to.be.length(0);
    });
});