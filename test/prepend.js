'use strict';

const chai = require('chai');
const expect = chai.expect;
require('../index');

describe('prepend', () => {
    it('should prepend an array', () => {
        const res = [1,2,3].prepend([4,5,6]);
        expect(res[3]).to.equal(1);
        expect(res[4]).to.equal(2);
        expect(res[5]).to.equal(3);
    });

    it('should prepend an element that\'s not an array', () => {
        const res = [1,2,3].prepend(4);
        expect(res[0]).to.equal(4);
    });

    it('should not prepend an empty value', () => {
        const res = [1,2,3].prepend();
        expect(res[3]).to.equal(undefined);
    });
});