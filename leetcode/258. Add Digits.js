// 258. Add Digits
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
const addDigitsOfNumber = (n) => [...(n + '')].reduce((a, b) => a + +b, 0) + '';

const addDigits = (num) => {
	num = addDigitsOfNumber(num);

	while (num.length > 1) num = addDigitsOfNumber(num);

	return +num;
};

// recursion
const length = (number) => String(number).length;
const digitsSum = (number) => [...String(number)].reduce((a, b) => a + +b, 0);

const addDigits = (num) =>
	length(num) === 1 ? num : addDigits(digitsSum(num));
