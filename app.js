// https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe

const oddBall = (arr) => arr.includes(arr.indexOf('odd'));

console.log(
	oddBall([
		'even',
		4,
		'even',
		7,
		'even',
		55,
		'even',
		6,
		'even',
		10,
		'odd',
		3,
		'even',
	])
);
