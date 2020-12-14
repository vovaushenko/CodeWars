// https://www.codewars.com/kata/555b73a81a6285b6ce000047

const add = (...arr) => arr.map((num, id) => num * (id + 1)).reduce((a, b) => a + b, 0);