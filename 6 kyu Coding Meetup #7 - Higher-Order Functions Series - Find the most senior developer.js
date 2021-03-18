// https://www.codewars.com/kata/coding-meetup-number-7-higher-order-functions-series-find-the-most-senior-developer

const findSenior = (list) =>
  list.filter((dev) => dev.age === Math.max(...list.map((dev) => dev.age)));
