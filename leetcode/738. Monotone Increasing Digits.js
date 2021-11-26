// 738. Monotone Increasing Digits
/*
An integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.

Given an integer n, return the largest number that is less than or equal to n with monotone increasing digits.
*/
const monotoneIncreasingDigits = (N) => {
	const digits = [...String(N)];

	let i = 0;
	while (i < digits.length - 1 && digits[i] <= digits[i + 1]) i++;

	while (i >= 0 && digits[i] > digits[i + 1]) {
		digits[i]--;
		i--;
	}

	for (let j = i + 2; j < digits.length; j++) digits[j] = 9;

	return Number(digits.join(''));
};
