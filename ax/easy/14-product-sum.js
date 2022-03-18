const productSum = (array, depth = 1) => {
	let total = 0;

	for (const el of array) {
		if (Array.isArray(el)) {
			total += productSum(el, depth + 1);
		} else {
			total += el;
		}
	}
	return total * depth;
};
