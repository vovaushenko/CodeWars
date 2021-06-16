// https://www.codewars.com/kata/593406b8f3d071d83c00005d

const countAnimals = (sentence) =>
	sentence
		.replace(/\D/g, ' ')
		.split(' ')
		.filter((num) => num)
		.reduce((total, num) => total + +num, 0);
