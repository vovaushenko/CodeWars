// https://www.codewars.com/kata/555de49a04b7d1c13c00000e

const add = (...args) => ~~args.reduce((res, num, id) => res + num / (id + 1), 0);
