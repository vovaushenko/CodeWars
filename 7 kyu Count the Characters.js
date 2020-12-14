// https://www.codewars.com/kata/577ad961ae2807182f000c29

const countChar = (word, char) =>
  word.split("").filter((letter) => letter.toLowerCase() === char.toLowerCase()).length;
