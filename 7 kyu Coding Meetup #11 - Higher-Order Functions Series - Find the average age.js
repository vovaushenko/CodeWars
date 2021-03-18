// https://www.codewars.com/kata/coding-meetup-number-11-higher-order-functions-series-find-the-average-age

const getAverageAge = (list) => Math.round(list.reduce((s, dev) => s + dev.age, 0) / list.length);
