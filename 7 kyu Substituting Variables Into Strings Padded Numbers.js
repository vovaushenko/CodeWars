// https://www.codewars.com/kata/51c89385ee245d7ddf000001

const solution = (num) => {
  let differenceOfLenths = 5 - String(num).length;
  let result = "";

  for (let i = 0; i < differenceOfLenths; i++) {
    result += 0;
  }
  return `Value is ${(result += num)}`;
};
