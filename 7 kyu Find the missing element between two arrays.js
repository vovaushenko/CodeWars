// https://www.codewars.com/kata/5a5915b8d39ec5aa18000030

const findMissing = (a1, a2) => {
  const hashMap1 = generateHashMap(a1);
  const hashMap2 = generateHashMap(a2);

  for (const key in hashMap1) {
    if (!(key in hashMap2)) return +key;
    if (hashMap1[key] !== hashMap2[key]) return +key;
  }
};

const generateHashMap = (arr) => arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
