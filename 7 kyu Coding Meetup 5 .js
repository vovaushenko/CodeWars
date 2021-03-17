// https://www.codewars.com/kata/coding-meetup-number-4-higher-order-functions-series-find-the-first-python-developer

const countLanguages = (list) =>
  list.reduce((map, dev) => ((map[dev.language] = map[dev.language] + 1 || 1), map), {});
