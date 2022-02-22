//2165. Smallest Value of the Rearranged Number
/*
You are given an integer num. Rearrange the digits of num such that its value is minimized and it does not contain any leading zeros.

Return the rearranged number with minimal value.

Note that the sign of the number does not change after rearranging the digits.
*/
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
