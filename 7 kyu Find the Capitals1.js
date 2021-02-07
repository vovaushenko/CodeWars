// https://www.codewars.com/kata/53573877d5493b4d6e00050c

const capital = (capitals) =>
  capitals.map((pair) => `The capital of ${pair.state || pair.country} is ${pair.capital}`);
