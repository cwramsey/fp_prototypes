'use strict';

const chai = require('chai');
const expect = chai.expect;
require('../index');

describe('head', () => {
    it('should return the first value in an array', () => {
        const res = [1,2,3].head();
        expect(res).to.equal(1);
    });

    it('should only be one item long', () => {
        const res = [1,2,3].head();
        expect(res).to.equal(1);
    });

    it('should return an empty array if starting array is empty', () => {
        const res = [].head();
        expect(res).to.be.length(0);
    });
});