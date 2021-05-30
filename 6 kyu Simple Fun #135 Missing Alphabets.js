const missingAlphabets = (s) => {
	const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
	const frequencies = [...s].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

	let maxFr = Math.max(...Object.values(frequencies));

	let missingChars = '';
	for (let char of ALPHABET) {
		if (!(char in frequencies)) {
			missingChars += char.repeat(maxFr);
		} else {
			if (maxFr > frequencies[char]) {
				missingChars += char.repeat(maxFr - frequencies[char]);
			}
		}
	}
	return missingChars;
};
