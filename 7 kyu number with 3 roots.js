// https://www.codewars.com/kata/5932c94f6aa4d1d786000028

const perfectRoots = (n) => {
  for (let i = 0; i < 3; i++) {
    n = Math.sqrt(n);
  }

  return n % 1 === 0;
};
