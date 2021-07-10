// https://leetcode.com/problems/count-square-sum-triples/
/*
1925. Count Square Sum Triples
A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.
*/

const countTriples = (n) => {
	const squares = Array.from({ length: n }, (_, id) => (id + 1) ** 2);
	const memo = squares.reduce((m, n) => ((m[n] = true), m), {});

	let triples = 0;

	for (let i = squares.length - 1; i >= 0; i--) {
		let sum = squares[i];
		for (let j = i - 1; j >= 0; j--) {
			let firstNum = squares[j];
			let secondNum = sum - firstNum;

			if (secondNum in memo) triples++;
		}
	}

	return triples;
};
