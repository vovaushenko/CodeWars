// https://www.codewars.com/kata/59fab1f0c9fc0e7cd4000072

const solve = (a, b) => {
  const hashA = [...a].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
  const hashB = [...b].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

  //   validation
  for (let char in hashB) {
    if (!hashA[char]) return 0;
    if (hashB[char] > hashA[char]) return 0;
  }

  return a.length - b.length;
};
