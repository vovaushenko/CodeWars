// https://www.codewars.com/kata/565c4e1303a0a006d7000127

const numberFormat = (num) => {
	let digits = [...String(Math.abs(num))];
	let formatted = [];

	for (let i = digits.length, counter = 0; i >= 0; i--, counter++) {
		formatted.unshift(digits[i]);

		if (counter === 3 && i !== 0) {
			formatted.unshift(',');
			counter = 0;
		}
	}

	return num >= 0 ? formatted.join('') : `-${formatted.join('')}`;
};
