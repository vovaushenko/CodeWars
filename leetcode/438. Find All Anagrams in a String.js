//438. Find All Anagrams in a String
/*
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


*/
const getMap = (arr) =>
	arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), new Object(null));

const areAnagramps = (map, chunk) => {
	const chunkMap = getMap([...chunk]);
	for (const char of chunk) {
		if (!(char in map)) return false;
		if (map[char] !== chunkMap[char]) return false;
	}
	return true;
};

const findAnagrams = (s, p) => {
	const map = getMap([...p]);
	const clean = [...s];
	const length = p.length;
	const res = [];
	for (let i = 0; i <= clean.length - length; i++) {
		const chunk = clean.slice(i, length + i);
		if (areAnagramps(map, chunk)) {
			res.push(i);
		}
	}
	return res;
};
