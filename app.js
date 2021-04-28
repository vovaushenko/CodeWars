// 1447. Simplified Fractions

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

console.log(simplifiedFractions(4));
