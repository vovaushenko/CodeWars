// https://www.codewars.com/kata/5626b561280a42ecc50000d1

const num = 9;

// const sumDigPow = (min, max) => {
//   let res = [];

const sumDigPow = (min, max) => {
  let res = [];

  for (let i = min; i < max; i++) {
    if (
      [...(i + '')].reduce((total, a, id) => Number(a) ** (id + 1) + Number(total)) === i   || [...i+''].length == 1) {
      res.push(i);
    }
  }
  return res;
};

console.log(
  [...(i + '')].reduce((total, a, id) => Number(a) ** (id + 1) + Number(total))
);

// sumDigPow(1, 10);
