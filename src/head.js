module.exports = function() {
    if (!this.length) {
        return this;
    }

    return this.slice(0,1)[0];
};