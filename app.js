'use strict';
<<<<<<< HEAD

const canSeePersonsCount = (heights) => {
	let view = [],
		res = [],
		n = heights.length,
		cnt = 0;
	for (let i = n - 1; i >= 0; cnt = 0, i--) {
		while (view[view.length - 1] < heights[i]) {
			cnt++;
			view.pop();
		}
		res.unshift(cnt + !!view.length);
		view.push(heights[i]);
	}
	return res;
};

console.log(canSeePersonsCount([10, 6, 8, 5, 11, 9]));
console.log(canSeePersonsCount([4, 3, 2, 1]));
=======
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
>>>>>>> 20ad12d1b63344c8981f1b898acb2b31cfb00c71
