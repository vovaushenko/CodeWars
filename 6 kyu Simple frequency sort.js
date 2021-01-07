// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

const solve = (arr) => {
    const hash = arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
    return arr.sort((a, b) => (hash[b] !== hash[a + ''] ? hash[b + ''] - hash[a + ''] : a - b));
};
