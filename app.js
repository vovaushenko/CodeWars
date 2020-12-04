// https://www.codewars.com/kata/59f7fc109f0e86d705000043

const divisibleByThree = (num) => [...num].reduce((total, n) => total + Number(n), 0) % 3 === 0 ? true : false;

