// 49. Group Anagrams

/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

const groupAnagrams = (strs) => {
	const map = {};

	for (let str of strs) {
		const key = [...str].sort().join('');
		if (!map[key]) {
			map[key] = [];
		}
		map[key].push(str);
	}

	return Object.values(map);
};
