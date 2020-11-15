// https://www.codewars.com/kata/53d32bea2f2a21f666000256

const largest = (num, a) => a.sort((a, b) => b - a).slice(0, num).reverse();

