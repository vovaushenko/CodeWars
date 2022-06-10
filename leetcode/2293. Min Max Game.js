// 2293. Min Max Game

const minMaxGame = (nums) => {
	if (nums.length === 1) return nums[0];

	let p = 0;

	const newNums = [];

	for (let i = 0; i < nums.length; i += 2) {
		p % 2
			? newNums.push(Math.max(nums[i], nums[i + 1]))
			: newNums.push(Math.min(nums[i], nums[i + 1]));

		p++;
	}

	return minMaxGame(newNums);
};
