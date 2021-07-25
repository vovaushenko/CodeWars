// https://leetcode.com/problems/shortest-completing-word/

const shortestCompletingWord = (licensePlate, words) => {
	const targetChars = licensePlate.toLowerCase().match(/[a-z]/g);
	const hash = targetChars.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

	let completingWords = [];
	for (let i = 0; i < words.length; i++) {
		if (isCompletingWord(targetChars, hash, words[i])) {
			completingWords.push(words[i]);
		}
	}
	const minLength = Math.min(...completingWords.map((w) => w.length));

	return completingWords.find((w) => w.length === minLength);
};

const isCompletingWord = (targetChars, hash, word) => {
	const wordHash = [...word].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

	for (let char of targetChars) {
		if (!(char in wordHash)) return false;
		if (hash[char] > wordHash[char]) return false;
	}

	return true;
};
