// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs: string[]): string[][] => {
	let anagrams: Record<string, string[]> = {};

	anagrams[strs[0]] = [strs[0]];
	let anagramsLength = 1;

	for (let i = 1; i < strs.length; i++) {
		let counter = 0;

		for (let key in anagrams) {
			counter++;
			if (areAnagrams(key, strs[i])) {
				anagrams[key].push(strs[i]);
				break;
			}

			if (counter === anagramsLength) {
				anagrams[strs[i]] = [strs[i]];
				anagramsLength++;
			}
		}
	}

	return [...Object.values(anagrams)];

	return [['h']];
};

const areAnagrams = (str1: string, str2: string): boolean => {
	if (str1.length !== str2.length) return false;
	const h1 = generateHash(str1);
	const h2 = generateHash(str2);
	for (let key in h1) {
		if (!(key in h2)) return false;
		if (h2[key] !== h1[key]) return false;
	}

	return true;
};

const generateHash = (str: string): Record<string, number> =>
	[...str].reduce(
		(h, c) => ((h[c] = h[c] + 1 || 1), h),
		{} as Record<string, number>
	);

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
export {};
