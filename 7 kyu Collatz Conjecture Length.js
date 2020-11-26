// https://www.codewars.com/kata/54fb963d3fe32351f2000102

const collatz = (n) => {
  const array = [];

  let helper = (num) => {
    if (num === 1) {
      array.push(num);
      return;
    }
    array.push(num);
    if (num % 2 == 0) helper(num / 2);
    if (num % 2 !== 0) helper(num * 3 + 1);
  };

  helper(n);
  return array.length;
};