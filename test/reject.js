'use strict';

const chai = require('chai');
const expect = chai.expect;
require('../index');

describe('reject', () => {
    it('should return only falsey values', () => {
        const res = [0,1,2,3].reject();
        expect(res).to.be.length(1);
        expect(res).to.be.contain(0);
    });

    it('should only return falsey values from the callback', () => {
        const res = [0,1,2,3].reject((x, i) => {
            return i === 0;
        });
        expect(res).to.be.length(3);
        expect(res).to.not.contain(0);
    });
});