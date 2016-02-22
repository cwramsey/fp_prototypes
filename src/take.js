module.exports = function(count) {
    if (!this.length) {
        return this;
    }

    return this.slice(0,count);
};