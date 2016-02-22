module.exports = function() {
    if (!this.length) {
        return undefined;
    }

    return this[this.length - 1];
};