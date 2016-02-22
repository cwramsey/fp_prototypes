module.exports = function() {
    if (!this.length || this.length === 1) {
        return [];
    }

    return this.slice(0, this.length - 1);
};