// https://www.codewars.com/kata/54129112fb7c188740000162

// prefill(2,"abc") --> ['abc','abc']

const prefill = (num, content) => {
  if (
    isNaN(num) === true ||
    num === Infinity ||
    num === -Infinity ||
    num === true ||
    num === false ||
    num % 1 !== 0 ||
    num < 0
  ) {
    throw new TypeError(`${num} is invalid`);
  }
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push(content);
  }

  return result;
};
