// https://www.codewars.com/kata/55da6c52a94744b379000036

const sumFromString = (str) =>
  str
    .replace(/\D/g, ' ')
    .split(' ')
    .filter((num) => num)
    .reduce((total, num) => total + +num, 0);

sum('In 2015, I want to know how much does iPhone 6+ cost?');
