// https://www.codewars.com/kata/59b11f57f322e5da45000254

const consecutive = (arr) => {
    if (arr.length == 0) return 0;
    const fullLength = Math.max(...arr) - Math.min(...arr) + 1;
    return fullLength - arr.length;
};