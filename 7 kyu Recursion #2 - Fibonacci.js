// https://www.codewars.com/kata/recursion-number-2-fibonacci

const fibonacci = (num) => {
  if (num <= 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};
