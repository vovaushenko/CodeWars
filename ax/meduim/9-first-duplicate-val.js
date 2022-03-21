'use strict';

const firstDuplicateValue = (nums) => {
	const count = {};

	for (const num of nums) {
		count[num] ? count[num]++ : (count[num] = 1);
		if (count[num] === 2) return num;
	}
	return -1;
};
