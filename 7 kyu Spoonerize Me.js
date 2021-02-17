// https://www.codewars.com/kata/56b8903933dbe5831e000c76

const spoonerize = (words) => {
  let [word1, word2] = words.split(' ').map((word) => [...word]);
  let temp;
  temp = word1[0];
  word1[0] = word2[0];
  word2[0] = temp;

  return [word1.join(''), word2.join('')].join(' ');
};
