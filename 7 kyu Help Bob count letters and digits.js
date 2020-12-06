// https://www.codewars.com/kata/5738f5ea9545204cec000155

const countLettersAndDigits = (str) => str.replace(/[^A-Za-z0-9]+/g, '').length;