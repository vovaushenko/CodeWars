// https://www.codewars.com/kata/55f8b5b09ec923860200000f

const sliding = (nums, k) => {
	if (k < 0) return [];
	const res = [];
	for (let i = 0; i <= nums.length - k; i++) {
		res.push(Math.max(...nums.slice(i, k + i)));
	}

	return res;
};
