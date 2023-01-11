function containsNearbyDuplicate(nums: number[], k: number): boolean {
	const idMap = new Map<number, number[]>();
	for (let i = 0; i < nums.length; i++) {
		if (idMap.has(nums[i])) {
			idMap.set(nums[i], [...idMap.get(nums[i])!, i]);
		} else {
			idMap.set(nums[i], [i]);
		}
	}

	for (const [key, value] of idMap) {
		if (value.length > 1) {
			let [i, j] = [0, 1];

			while (j < value.length) {
				if (value[j] - value[i] <= k) {
					return true;
				}
				i++;
				j++;
			}
		}
	}

	return false;
}
