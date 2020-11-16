// https://www.codewars.com/kata/525f47c79f2f25a4db000025

const validPhoneNumber = (number) => {
  return number.length === 14 &&
    number[0] === '(' &&
    number[4] === ')' &&
    number[9] === '-'
    ? true
    : false;
};

