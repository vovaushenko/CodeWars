// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

const add = (num) => {
  const sum = (second) => add(num + second);

  sum.valueOf = () => num;
  return sum;
};

console.log(add(1)(2));
