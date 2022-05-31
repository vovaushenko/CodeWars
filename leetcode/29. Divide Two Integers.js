//29. Divide Two Integers

const divide = (dividend, divisor) => {
	if (dividend === -Math.pow(2, 31) && divisor === -1)
		return Math.pow(2, 31) - 1;

	if (divisor === 1) return dividend;

	let isNegative = false;

	if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
		isNegative = true;
	}

	let newDividend = Math.abs(dividend);

	const newDivisor = Math.abs(divisor);

	let result = 0;

	while (newDividend >= newDivisor) {
		newDividend = newDividend - newDivisor;

		result++;
	}

	return isNegative ? -result : result;
};
