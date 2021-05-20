// 1460. Make Two Arrays Equal by Reversing Sub-arrays

const generateHash = (arr) =>
	arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

const canBeEqual = (target, arr) => {
	const h1 = generateHash(target);
	const h2 = generateHash(arr);
	for (let key in h1) {
		if (!(key in h2)) return false;
		if (h1[key] !== h2[key]) return false;
	}

	return true;
};
