const getFrequencyMap = (str) =>
	[...str].reduce(
		(h, c) => (h.has(c) ? h.set(c, h.get(c) + 1) : h.set(c, 1), h),
		new Map()
	);

const generateDocument = (chars, doc) => {
	const [charsHash, docHash] = [chars, doc].map(getFrequencyMap);
	for (const char of doc) {
		if (!charsHash.has(char)) return false;
		if (charsHash.get(char) < docHash.get(char)) return false;
	}
	return true;
};
