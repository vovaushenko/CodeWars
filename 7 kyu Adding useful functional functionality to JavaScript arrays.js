Array.range = function (start, count) {
    return Array.from({ length: count }, (_, id) => id + start);
};

Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
};
