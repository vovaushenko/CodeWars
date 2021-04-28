// 1447. Simplified Fractions

// Given an integer n, return a list of all simplified fractions between 0 and 1 (exclusive) such that the denominator is less-than-or-equal-to n. The fractions can be in any order.

const simplifiedFractions = (n) => {
  const res = [];
  const results = {};

  for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
      if (!(i / j in results) && i / j !== 1 && j > i) {
        results[i / j] = true;
        res.push(`${i}/${j}`);
      }
    }
  }

  return res;
};
