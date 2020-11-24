// https://www.codewars.com/kata/526571aae218b8ee490006f4

const countBits = (num) => {
  let res = [];
  let toBinary = (n) => {
    if (n === 0) return;
    res.push(n % 2);

    toBinary(Math.floor(n / 2));
  };

  toBinary(num);
  return res.filter((a) => a == 1).length;
};
