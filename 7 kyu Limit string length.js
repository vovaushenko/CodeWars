// https://www.codewars.com/kata/5208fc3cb613bc725f000142

const solution = (str, num) => {
  let result = str.slice(0, num);
  return result.length < str.length ? `${result}...` : result;
};
