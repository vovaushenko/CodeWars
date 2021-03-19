// https://www.codewars.com/kata/coding-meetup-number-15-higher-order-functions-series-find-the-odd-names

const summarizeFirstName = (name) => [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0);

const findOddNames = (list) =>
  list.filter((dev) => summarizeFirstName(dev.summarizeFirstName) % 2 !== 0);
