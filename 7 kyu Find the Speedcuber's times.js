// https://www.codewars.com/kata/5d7c7697e8ad48001e642964

const cubeTimes = (times) => [
	+(
		times
			.sort((a, b) => a - b)
			.slice(1, 4)
			.reduce((a, b) => a + b, 0) / 3
	).toFixed(2),
	Math.min(...times),
];
