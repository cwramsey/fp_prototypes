module.exports = function(cb) {
    var items = [];

    this.forEach((x,i) => {
        if (cb && !cb(x, i)) {
            items = items.concat([x]);
        } else if (!cb && !x) {
            items = items.concat([x]);
        }
    });

    return items;
};