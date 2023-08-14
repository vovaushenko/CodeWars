/**
 * @param {number[]} nums
 * @return {number}
 */

function maxDigit(num) {
	const digits = [...num.toString()].map(Number);
	return Math.max(...digits);
}

var maxSum = function (nums) {
	let res = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			const [n1, n2] = [nums[i], nums[j]];
			if (maxDigit(n1) === maxDigit(n2)) res = Math.max(res, n1 + n2);
		}
	}

	return res === -Infinity ? -1 : res;
};
