// 49. Group Anagrams

/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

const groupAnagrams = (strs) => {
	const map = new Map();

	for (let str of strs) {
		const sorted = [...str].sort().join('');

		if (map.has(sorted)) {
			map.get(sorted).push(str);
		} else {
			map.set(sorted, [str]);
		}
	}

	const anagrams = [];
	for (group of map.values()) {
		anagrams.push(group);
	}

	return anagrams;
};
