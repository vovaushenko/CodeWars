// https://www.codewars.com/kata/57faa6ff9610ce181b000028

const crap = (x, bags, cap) => {
  const statistics = x
    .map((subarr) => subarr.filter((el) => el === '@' || el === 'D'))
    .reduce((flat, el) => flat.concat(...el), [])
    .reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

  if (statistics['D']) return 'Dog!!';

  return statistics['@'] > bags * cap ? 'Cr@p' : 'Clean';
};
