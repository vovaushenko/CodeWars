/**
 * @param {number[]} nums
 * @return {number}
 */

var countCompleteSubarrays = function (nums) {
	const limit = new Set(nums).size;
	let res = 0;

	for (let i = 0; i < nums.length; i++) {
		const subarrUnique = new Set();
		for (let j = i; j < nums.length; j++) {
			subarrUnique.add(nums[j]);

			if (subarrUnique.size === limit) {
				res++;
			}

			if (subarrUnique.size > limit) {
				break;
			}
		}
	}

	return res;
};
