'use strict';

const chai = require('chai');
const expect = chai.expect;
require('../index');

describe('append', () => {
    it('should append an array', () => {
        const res = [1,2,3].append([4,5,6]);
        expect(res[3]).to.equal(4);
        expect(res[4]).to.equal(5);
        expect(res[5]).to.equal(6);
    });

    it('should append an element that\'s not an array', () => {
        const res = [1,2,3].append(4);
        expect(res[3]).to.equal(4);
    });

    it('should not append an empty value', () => {
        const res = [1,2,3].append();
        expect(res[3]).to.equal(undefined);
    });
});