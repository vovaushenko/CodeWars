// https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69

const hamming = (s1, s2) =>
  [...s1].reduce((hammingDistance, char, id) => {
    if (char !== s2[id]) {
      hammingDistance++;
    }
    return hammingDistance;
  }, 0);
