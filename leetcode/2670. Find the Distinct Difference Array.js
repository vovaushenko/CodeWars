/**
 * @param {number[]} nums
 * @return {number[]}
 */

const distinctNums = (arr) => [...new Set(arr)].length;

var distinctDifferenceArray = function (nums) {
	const res = [];

	for (let i = 0; i < nums.length; i++) {
		const [left, right] = [nums.slice(0, i + 1), nums.slice(i + 1)].map(
			distinctNums
		);
		res.push(left - right);
	}

	return res;
};
