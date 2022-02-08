'use strict';
const ascending = (a, b) => a - b;
const descending = (a, b) => b - a;

const smallestNumber = (num) => {
	if (!num) return 0;
	if (num > 0) {
		const sortedDigits = [...String(num)].map(Number).sort(ascending);

		for (let i = 0; i < sortedDigits.length; i++) {
			if (sortedDigits[i]) {
				sortedDigits.unshift(sortedDigits.splice(i, 1)[0]);
				break;
			}
		}
		return Number(sortedDigits.join(''));
	} else {
		const sortedDigits = [...String(num).slice(1)].map(Number).sort(descending);
		return -1 * sortedDigits.join('');
	}
};
console.log(smallestNumber(-7609));
