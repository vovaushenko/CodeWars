'use strict';

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
