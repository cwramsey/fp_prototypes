'use strict';

module.exports = function(arr) {
    if (!Array.isArray(arr)) {
        arr = [arr];
    }

    return this.concat(arr);
};