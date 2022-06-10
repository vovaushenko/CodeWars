//2295. Replace Elements in an Array

const arrayChange = (nums, operations) => {
	const idMap = nums.reduce((h, n, id) => ((h[n] = id), h), {});

	for (const [target, replacement] of operations) {
		const targetIndex = idMap[target];

		idMap[replacement] = targetIndex;

		nums[targetIndex] = replacement;
	}

	return nums;
};
