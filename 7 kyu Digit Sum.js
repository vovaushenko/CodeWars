// https://www.codewars.com/kata/56bcae6366a2ab99f10011ec

const sumTheDigitsOfStr = (str) => [...str].reduce((total, num) => total + Number(num), 0);

const digitSum = (str) => (str.length === 1 ? str : digitSum(sumTheDigitsOfStr(str) + ''));
