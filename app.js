// https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented

// 2

const allContinents = (list) => [...new Set(list.map((dev) => dev.continent))].length === 5;
