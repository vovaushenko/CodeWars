// https://www.codewars.com/kata/5a626fc7fd56cb63c300008c
const DIGITS = [
	'zero',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
];
const uncollapse = (collapsedDigits) => {
	const uncollapsed = [];

	const uncollapser = (collapsed) => {
		if (!collapsed) return;

		for (let digit of DIGITS) {
			if (collapsed.startsWith(digit)) {
				uncollapsed.push(digit);
				uncollapser(collapsed.replace(digit, ''));
			}
		}
	};

	uncollapser(collapsedDigits);
	return uncollapsed.join(' ');
};
