module.exports = function() {
    if (!this.length) {
        return this;
    }

    return this.splice(1);
};