'use strict';

const chai = require('chai');
const expect = chai.expect;
require('../index');

describe('init', () => {
    it('should return all but the last element in an array', () => {
        const res = [0,1,2,3].init();
        expect(res).to.be.length(3);
        expect(res).to.not.contain(3);
    });

    it('should return empty if length === 0', () => {
        const res = [].init();
        expect(res).to.be.length(0);
    });

    it('should return empty if length === 1', () => {
        const res = [0].init();
        expect(res).to.be.length(0);
    });
});