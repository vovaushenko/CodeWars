const fourSum = (nums, target) => {
	nums = [...new Set(nums)];
	nums.sort((a, b) => a - b);
	const seen = {};
	const res = [];

	for (let i = 0; i < nums.length; i++) {
		const one = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			const two = nums[j];
			for (let k = j + 1; k < nums.length; k++) {
				const three = nums[k];
				for (let l = k + 1; l < nums.length; l++) {
					const four = nums[l];
					const combo = [one, two, three, four];
					const comboSum = one + two + three + four;
					if (comboSum === target) {
						if (!(combo.join('*') in seen)) {
							res.push(combo);
							seen[combo.join('*')] = true;
						}
					}
				}
			}
		}
	}

	return res;
};
