'use strict';

module.exports = function(arr) {
    if (arr === undefined) {
        return this;
    }

    if (!Array.isArray(arr)) {
        arr = [arr];
    }

    return arr.concat(this);
};