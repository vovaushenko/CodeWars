// https://www.codewars.com/kata/55d8dc4c8e629e55dc000068/train/javascript

const trigrams = (phrase) => {
  const noWhiteSpaces = phrase.replace(/ /g, '_');
  const triagramshCache = [];
  let [i, j, k] = [0, 1, 2];
  while (k < noWhiteSpaces.length) {
    triagramshCache.push(noWhiteSpaces[i] + noWhiteSpaces[j] + noWhiteSpaces[k]);
    i++;
    j++;
    k++;
  }
  return triagramshCache.join(' ');
};
