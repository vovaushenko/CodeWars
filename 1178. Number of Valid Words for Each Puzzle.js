// https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/

const generateLookup = (word) => {
	const lookup = new Map();
	for (let char of word) {
		lookup.set(char, true);
	}
	lookup.set('first', word[0]);
	return lookup;
};
const generateWordLookup = (word) => {
	const lookup = [...word].reduce((l, c) => ((l[c] = true), l), {});
	return lookup;
};

const findNumOfValidWords = (words, puzzles) => {
	const lookups = puzzles.map((pzl) => generateLookup(pzl));
	const wordLookups = words.map((wrd) => generateWordLookup(wrd));
	let res = [];

	for (let lookup of lookups) {
		let currentMatch = 0;

		for (let wrdLookup of wordLookups) {
			const chars = Object.keys(wrdLookup);

			if (!(lookup.get('first') in wrdLookup)) continue;

			if (chars.every((char) => lookup.has(char))) {
				currentMatch++;
			}
		}
		res.push(currentMatch);
	}

	return res;
};

console.log(
	findNumOfValidWords(
		['aaaa', 'asas', 'able', 'ability', 'actt', 'actor', 'access'],
		['aboveyz', 'abrodyz', 'abslute', 'absoryz', 'actresz', 'gaswxyz']
	)
);

/*
for (let lookup of lookups) {
		let currentMatch = 0;

		for (let i = 0; i < words.length; i++) {
			const word = [...words[i]];

			if (
				word.every((char) => char in lookup) &&
				word.includes(lookup['first'])
			) {
				currentMatch++;
			}
		}
		res.push(currentMatch);
	}
*/
