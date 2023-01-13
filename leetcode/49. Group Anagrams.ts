const groupAnagrams = (strs: string[]): string[][] => [
	...strs
		.reduce((map, s) => {
			const key = [...s].sort().join('');
			map.has(key) ? map.set(key, [...map.get(key), s]) : map.set(key, [s]);
			return map;
		}, new Map())
		.values(),
];
