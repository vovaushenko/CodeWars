//128. Longest Consecutive Sequence

const longestConsecutive = (nums) => {
	const distinct = new Set(nums);

	let streak = 0;

	for (const num of nums) {
		let start = num;

		let count = 0;

		if (!distinct.has(num - 1)) {
			while (distinct.has(start)) {
				start++;

				count++;
			}
		}

		streak = Math.max(count, streak);
	}

	return streak;
};
