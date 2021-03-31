// https://www.codewars.com/kata/564fa92d1639fbefae00009d

const factors = (x) => {
  if (typeof x !== 'number' || x < 1 || x % 1 !== 0) return -1;
  const factors = [];
  for (let i = x; i >= 1; i--) {
    if (x % i === 0) factors.push(i);
  }

  return factors;
};
