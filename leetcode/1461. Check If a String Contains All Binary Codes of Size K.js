//1461. Check If a String Contains All Binary Codes of Size K

const hasAllCodes = (s, k) => {
	const ALL_BINARY_CODES_COUNT = 2 ** k;

	const map = {};

	for (let i = 0; i < s.length - k + 1; i++) {
		const binaryCode = s.slice(i, i + k);

		if (!(binaryCode in map)) {
			map[binaryCode] = true;
		}
	}

	return Object.keys(map).length >= ALL_BINARY_CODES_COUNT;
};
