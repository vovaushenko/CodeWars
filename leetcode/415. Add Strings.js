// https://leetcode.com/problems/add-strings/

// 415. Add Strings
/*
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

*/

const addStrings = (n1, n2) => {
	let [num1, num2] = [n1, n2].sort((a, b) => a.length - b.length);

	let leadingZeroes = '0'.repeat(num2.length - num1.length);
	num1 = leadingZeroes + num1;

	let res = '';
	let handicap = false;

	for (let i = num2.length - 1; i >= 0; i--) {
		let sum = +num2[i] + +num1[i];

		if (handicap) {
			sum += 1;
			handicap = false;
		}
		if (sum < 10) {
			res = sum + res;
		} else {
			res = sum - 10 + res;
			handicap = true;
		}

		if (i === 0 && handicap) {
			res = '1' + res;
		}
	}

	return res;
};
