// https://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe

const countDevelopers = (list) =>
  list.filter((dev) => dev.continent === 'Europe' && dev.language === 'JavaScript').length;
