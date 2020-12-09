// https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010

const lostSheep = (friday, saturday, total) =>
  total - [...friday, ...saturday].reduce((a, b) => a + b, 0);