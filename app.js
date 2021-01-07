// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

// firstly we will create hash-map of the array
// then we will do some basic sort based on frequency

const solve = (arr) => {
    const hash = arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
    return arr.sort((a, b) => (hash[b] !== hash[a + ''] ? hash[b + ''] - hash[a + ''] : a - b));
};

console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]));
// [3,3,3,5,5,7,7,2,9]
