// https://www.codewars.com/kata/57a60bad72292d3e93000a5a

const toAcronym = (inp) =>
	inp
		.split(' ')
		.map((word) => word[0].toUpperCase())
		.join('');
