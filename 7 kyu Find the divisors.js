// https://www.codewars.com/kata/544aed4c4a30184e960010f4

const divisors = (num) => {
  let res = [];

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      res.push(i);
    }
  }
  return res.length === 0 ? `${num} is prime` : res;
};
