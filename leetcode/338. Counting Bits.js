const countBits = (n) => {
	const res = [];

	for (let i = 0; i <= n; i++) {
		res.push(numOfBits(i));
	}

	return res;
};

const numOfBits = (n) => n.toString(2).replace(/0/g, '').length;
// 338. Counting Bits
/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
*/

const countBits = (n) => {
	const res = [];

	for (let i = 0; i <= n; i++) {
		res.push(numOfBits(i));
	}

	return res;
};

const numOfBits = (n) => n.toString(2).replace(/0/g, '').length;
