//890. Find and Replace Pattern1
const areMatching = (s1, pattern) => {
	if (s1.length !== pattern.length) return false;
	const map = {};
	const traced = {};

	for (let i = 0; i < s1.length; i++) {
		const char = s1[i];
		if (!map[char]) {
			if (traced[pattern[i]]) return false;
			map[char] = pattern[i];
			traced[pattern[i]] = true;
		} else {
			if (map[char] !== pattern[i]) return false;
		}
	}
	return true;
};

const findAndReplacePattern = (words, pattern) => {
	return words.filter((word) => areMatching(word, pattern));
};
