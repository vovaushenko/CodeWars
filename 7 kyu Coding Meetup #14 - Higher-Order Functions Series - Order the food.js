// https://www.codewars.com/kata/coding-meetup-number-14-higher-order-functions-series-order-the-food

const orderFood = (list) =>
  list.reduce((order, dev) => ((order[dev.meal] = order[dev.meal] + 1 || 1), order), {});
