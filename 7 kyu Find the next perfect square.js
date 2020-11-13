// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

const findNextSquare = (num) => {
  return (Math.sqrt(num) + 1) ** 2 % 1 === 0 ? (Math.sqrt(num) + 1) ** 2 : -1;
};
