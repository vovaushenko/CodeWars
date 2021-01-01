// https://www.codewars.com/kata/579fa665bb9944f9340005d2

const rotateToMax = (num) => Number([...(num + '')].sort((a, b) => b - a).join(''));
