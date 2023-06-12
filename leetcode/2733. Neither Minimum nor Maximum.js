/**
 * @param {number[]} nums
 * @return {number}
 */

const getMinMax = (nums) => {
	let [min, max] = [Infinity, -Infinity];
	for (const n of nums) {
		if (n < min) min = n;
		if (n > max) max = n;
	}
	return [min, max];
};

var findNonMinOrMax = function (nums) {
	const [min, max] = getMinMax(nums);

	return nums.find((n) => n !== min && n !== max) ?? -1;
};
