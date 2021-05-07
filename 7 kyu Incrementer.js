// https://www.codewars.com/kata/590e03aef55cab099a0002e8

const validateIncrement = (newNum) =>
	newNum < 10 ? newNum : +String(newNum)[String(newNum).length - 1];

const incrementer = (arr) =>
	arr.map((num, id) => validateIncrement(num + id + 1));
