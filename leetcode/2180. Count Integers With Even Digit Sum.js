//2180. Count Integers With Even Digit Sum
/*
Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

The digit sum of a positive integer is the sum of all its digits.
*/
const digitsSum = (num) => [...String(num)].reduce((a, b) => a + +b, 0);
const isEven = (num) => num % 2 === 0;

const countEven = (num) => {
	const candidates = Array.from({ length: num }, (_, id) => ++id);
	return candidates.filter((num) => isEven(digitsSum(num))).length;
};
