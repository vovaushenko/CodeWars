// https://www.codewars.com/kata/55a8a36703fe4c45ed00005b

const multiple = (x) =>
	isDivisibleBy(x, 3) && isDivisibleBy(x, 5)
		? 'BangBoom'
		: isDivisibleBy(x, 5)
		? 'Boom'
		: isDivisibleBy(x, 3)
		? 'Bang'
		: 'Miss';

const number = (x) => x;
const isDivisibleBy = (n, d) => !(n % d);
