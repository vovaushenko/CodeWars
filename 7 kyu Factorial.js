// https://www.codewars.com/kata/57a049e253ba33ac5e000212

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
