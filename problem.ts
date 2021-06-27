/**
 * *279. Perfect Squares
 * Given an integer n, return the least number of perfect square numbers that sum to n.
	A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
 */

const numSquares = (n: number): number => {
	if (Math.sqrt(n) % 1 === 0) return 1;
	let start = 1;
	let pSquares = [];
	let combinations = [];

	while (start ** 2 < n) {
		pSquares.push(start ** 2);
		start++;
	}

	console.log(pSquares);

	return 1;
};

console.log(numSquares(12));
