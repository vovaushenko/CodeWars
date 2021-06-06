// https://leetcode.com/problems/rotate-function/

/*
396. Rotate Function

You are given an integer array nums of length n.

Assume arrk to be an array obtained by rotating nums by k positions clock-wise. We define the rotation function F on nums as follow:

F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1].
Return the maximum value of F(0), F(1), ..., F(n-1).
*/

const calculateF = (arr) => arr.reduce((res, num, id) => res + num * id, 0);

const maxRotateFunction = (arr) => {
	let maxF = -Infinity;
	let counter = 0;

	while (counter !== arr.length) {
		maxF = Math.max(maxF, calculateF(arr));
		arr.unshift(arr.pop());
		counter++;
	}

	return maxF;
};
