//2259. Remove Digit From Number to Maximize Result

const removeDigit = (number, digit) => {
	let maxResult = null;
	const digits = String(number);
	for (let i = 0; i < digits.length; i++) {
		if (digits[i] === digit) {
			const withoutCurrentDigit = digits.slice(0, i) + digits.slice(i + 1);
			if (!maxResult || maxResult.localeCompare(withoutCurrentDigit) === -1)
				maxResult = withoutCurrentDigit;
		}
	}
	return maxResult;
};
