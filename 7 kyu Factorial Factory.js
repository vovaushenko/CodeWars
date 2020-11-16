// https://www.codewars.com/kata/528e95af53dcdb40b5000171

const factorial = (num) => {
  if (num < 0) {
    return null;
  }
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
};
