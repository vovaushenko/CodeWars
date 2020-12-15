// https://www.codewars.com/kata/56a1c074f87bc2201200002e

const smaller = (arr) => {
  return arr.map((a, id) => arr.slice(id).filter((num) => num < a).length);
};