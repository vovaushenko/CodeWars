// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba

const getSumOfDigits = (integer) =>
  [...(integer + '')].reduce((total, num) => total + Number(num), 0);