//2231. Largest Number After Digit Swaps by Parity
/*
You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).

Return the largest possible value of num after any number of swaps.
*/
const isEven = (num) => num % 2 === 0;

const largestInteger = (num) => {
	const digits = [...String(num)].map(Number);

	const [sortedOdd, sortedEven] = digits
		.reduce(
			([odd, even], digit) =>
				isEven(digit) ? even.push(+digit) : odd.push(+digit),
			[[], []]
		)
		.map((digits) => digits.sort((a, b) => b - a));

	const res = [];

	for (const digit of digits)
		isEven(digit) ? res.push(sortedEven.shift()) : res.push(sortedOdd.shift());

	return Number(res.join(''));
};
