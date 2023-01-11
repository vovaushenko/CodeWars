function majorityElement(nums: number[]): number {
	const frequencyMap = new Map<number, number>();
	for (const n of nums) {
		if (frequencyMap.has(n)) {
			frequencyMap.set(n, frequencyMap.get(n)! + 1);
		} else {
			frequencyMap.set(n, 1);
		}
	}

	for (const [key, value] of frequencyMap) {
		if (value > nums.length / 2) {
			return key;
		}
	}

	return 0;
}
