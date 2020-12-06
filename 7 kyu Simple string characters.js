// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058

const solve = (str) => {
  const lowercase = str.replace(/[^a-z]/g, '').length;
  const uppercase = str.replace(/[^A-Z]/g, '').length;
  const numbers = str.replace(/[^0-9]/g, '').length;
  const rest = str.length - (lowercase + uppercase + numbers);
  return [uppercase, lowercase, numbers, rest];
};