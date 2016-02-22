module.exports = function(idx, cb) {
    if (idx === undefined || !cb) {
        throw new Error("Index and callback must be defined");
    }

    return this.map((x, i) => {
        if (i == idx) {
            x = cb(x);
        }

        return x;
    });
};