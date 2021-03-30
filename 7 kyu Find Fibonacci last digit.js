// https://www.codewars.com/kata/56b7251b81290caf76000978

const getLastDigit = (index) => {
  const fibs = [0n, 1n];
  while (fibs.length < index + 1) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }

  const lastDigit = fibs[fibs.length - 1] + '';

  return +lastDigit[lastDigit.length - 1];
};
