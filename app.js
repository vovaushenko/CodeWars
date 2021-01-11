var SequenceSum = (function () {
    function SequenceSum() {}

    SequenceSum.showSequence = function (count) {
        if (count < 0) return `${count}<0`;
        const nums = Array.from({ length: count + 1 }, (_, id) => id);
        const numsSum = nums.reduce((a, b) => a + b, 0);

        return `${nums.join('+')} = ${numsSum}`;
    };

    return SequenceSum;
})();
