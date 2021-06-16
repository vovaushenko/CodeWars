// https://www.codewars.com/kata/582aafca2d44a4a4560000e7

const keepOrder = (arr, val) =>
	validate(arr, arr.indexOf(arr.find((num) => num >= val)));

const validate = (arr, id) => (id === -1 ? arr.length : id);
