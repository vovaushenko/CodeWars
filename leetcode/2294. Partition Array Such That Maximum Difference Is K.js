//2294. Partition Array Such That Maximum Difference Is K

const partitionArray = (nums, k) => {
	const sorted = [...nums].sort((a, b) => a - b);

	let res = 0;

	let prev = sorted[0];

	for (let i = 1; i < sorted.length; i++) {
		if (sorted[i] - prev > k) {
			res++;

			prev = sorted[i];
		}
	}

	return res + 1;
};
