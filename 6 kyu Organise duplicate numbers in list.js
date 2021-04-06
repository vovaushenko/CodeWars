// https://www.codewars.com/kata/5884b6550785f7c58f000047

const group = (arr) => {
  const hash = arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
  const res = [];
  const seen = {};
  for (let num of arr) {
    if (!seen[num]) {
      res.push(Array.from({ length: hash[num] }, () => num));
      seen[num] = true;
    }
  }

  return res;
};
