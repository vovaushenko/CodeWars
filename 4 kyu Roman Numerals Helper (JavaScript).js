// https://www.codewars.com/kata/51b66044bce5799a7f000003

const MAP = {
	I: 1,
	IV: 4,
	V: 5,
	IX: 9,
	X: 10,
	XL: 40,
	L: 50,
	XC: 90,
	C: 100,
	CD: 400,
	D: 500,
	CM: 900,
	M: 1000,
};

const fromRoman = (roman) => {
	let decimal = 0;
	const helper = (tempRoman) => {
		if (!tempRoman.length) return;
		const firstTwoChars = tempRoman.slice(0, 2);
		const firstChar = tempRoman[0];
		if (firstTwoChars in MAP) {
			decimal += MAP[firstTwoChars];
			helper(tempRoman.slice(2));
		} else {
			decimal += MAP[firstChar];
			helper(tempRoman.slice(1));
		}
	};
	helper(roman);
	return decimal;
};

const toRoman = (num) => {
	const REVERSE_MAP = Object.entries(MAP)
		.map(([x, y]) => ({ [y]: x }))
		.reduce((map, obj) => ({ ...map, ...obj }), {});
	const MAX_VALUES = Object.keys(REVERSE_MAP).map(Number).reverse();
	let roman = '';

	const helper = (n) => {
		if (n <= 0) return;
		const decrement = MAX_VALUES.find((breakpoint) => breakpoint <= n);
		roman += REVERSE_MAP[decrement];
		const left = n - decrement;
		helper(left);
	};

	helper(num);
	return roman;
};

const RomanNumerals = {
	fromRoman,
	toRoman,
};
