// https://leetcode.com/problems/maximum-69-number/

/*
Given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
*/

const maximum69Number = (num) => {
	let digits = [...(num + '')];
	for (let i = 0; i < digits.length; i++) {
		if (digits[i] === '6') {
			digits[i] = 9;
			break;
		}
	}

	return +digits.join('');
};
