// 2559. Count Vowel Strings in Ranges
/*
You are given a 0-indexed array of strings words and a 2D array of integers queries.

Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li to ri (both inclusive) of words that start and end with a vowel.

Return an array ans of size queries.length, where ans[i] is the answer to the ith query.

Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.
*/
const isVowel = (char) => /^[aeiou]$/i.test(char);
const isVowelString = (str) => isVowel(str[0]) && isVowel(str[str.length - 1]);

const vowelStrings = (words, queries) => {
	const map = new Map();
	const memo = {};
	const res = [];
	for (let i = 0; i < words.length; i++) {
		isVowelString(words[i]) ? map.set(i, true) : map.set(i, false);
	}

	for (let [start, finish] of queries) {
		let count = 0;
		const key = [start, finish].join('*');
		if (key in memo) {
			res.push(memo[key]);
			continue;
		}
		while (start <= finish) {
			const isCurrentWordVowelString = map.get(start);
			if (isCurrentWordVowelString) count++;
			start++;
		}
		memo[key] = count;
		res.push(count);
	}

	return res;
};

console.log(
	vowelStrings(
		['aba', 'bcb', 'ece', 'aa', 'e'],
		[
			[0, 2],
			[1, 4],
			[1, 1],
		]
	)
);
