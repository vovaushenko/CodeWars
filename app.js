// https://www.codewars.com/kata/5a6225e5d8e145b540000127

const generateHashMap = (arr) => arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
const common = (a, b, c) => {
  const h1 = generateHashMap(a);
  const h2 = generateHashMap(b);
  const h3 = generateHashMap(c);
  let sum = 0;
  for (let num of a) {
    if (
      num in h2 &&
      num in h3 &&
      h1[num] === h2[num] &&
      h2[num] === h3[num] &&
      h1[nun] === h3[num]
    ) {
      sum += num;
    }
  }
  return sum;
};

console.log(common([1, 2, 3], [5, 3, 2], [7, 3, 2]));
