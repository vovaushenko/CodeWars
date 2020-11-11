// https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e

const maxNumber = (num) =>
  parseInt([...String(num)].sort((a, b) => b - a).join(''));
