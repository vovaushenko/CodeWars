// https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/javascript
const areSimilar = (word1, word2) => [...word1].sort().join('') === [...word2].sort().join('');
const grabscrab = (anagram, dictionary) =>
  dictionary.map((word) => (areSimilar(anagram, word) ? word : null)).filter((word) => word);
