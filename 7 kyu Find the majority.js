const majority = (arr) => {
	if (!arr.length) return null;
	if ([...new Set(arr)].length === 1) return String(arr[0]);
	const map = arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

	const maxFrequency = Math.max(...Object.values(map));

	const major = Object.entries(map).filter(
		([_, frequency]) => frequency === maxFrequency
	);

	if (major.length > 1) return null;

	return major[0][0];
};
