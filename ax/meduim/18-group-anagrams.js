const groupAnagrams = (words) => {
	const map = new Map();

	for (const word of words) {
		const key = [...word].sort().join('');
		if (map.has(key)) map.set(key, [...map.get(key), word]);
		else map.set(key, [word]);
	}

	const groupedAnagrams = [];

	for (const [_key, anagrams] of map.entries()) {
		groupedAnagrams.push(anagrams);
	}

	return groupedAnagrams;
};
