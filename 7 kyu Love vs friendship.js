// https://www.codewars.com/kata/59706036f6e5d1e22d000016

const wordsToMarks = (str) => {
  let alphabet = ' abcdefghijklmnopqrstuvwxyz';
  return [...str].reduce((total, char) => total + alphabet.indexOf(char), 0);
};