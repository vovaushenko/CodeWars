// 2279. Maximum Bags With Full Capacity of Rocks

const maximumBags = (capacity, rocks, additionalRocks) => {
	let res = 0;

	const arr = capacity.map((c, id) => c - rocks[id]).sort((a, b) => a - b);

	for (let q = 0; q < arr.length; q++) {
		additionalRocks -= arr[q];

		if (additionalRocks < 0) return res;

		res++;
	}

	return res;
};
