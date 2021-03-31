// https://www.codewars.com/kata/5b6c220fa0a661fbf200005d/train/javascript

const NUMBERS = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  nil: 0,
};

const scoreboard = (str) =>
  str
    .split(' ')
    .filter((word) => word in NUMBERS)
    .map((number) => NUMBERS[number]);
