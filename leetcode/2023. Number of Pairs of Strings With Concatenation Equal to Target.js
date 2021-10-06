// 2023. Number of Pairs of Strings With Concatenation Equal to Target
/**
 *Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.
 *
 * !BRUTE FORCE (optimize later)
 */
const numOfPairs = (nums, target) => {
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		let prefix = nums[i];

		for (let j = 0; j < nums.length; j++) {
			let suffix = nums[j];

			if (prefix + suffix === target) {
				if (i !== j) {
					count++;
				}
			}
		}
	}

	return count;
};
