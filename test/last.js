'use strict';

const chai = require('chai');
const expect = chai.expect;
require('../index');

describe('last', () => {
    it('should return last value from an array', () => {
        const res = [0,1,2,3].last();
        expect(res).to.equal(3);
    });

    it('should return an undefined if array is empty', () => {
        const res = [].last();
        expect(res).to.equal(undefined);
    });
});