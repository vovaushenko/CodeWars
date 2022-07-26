//2351. First Letter to Appear Twice
const repeatedCharacter = (s) => {
	const seen = {};
	for (const char of s) {
		if (char in seen) {
			return char;
		} else {
			seen[char] = true;
		}
	}
};
