// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const letters = [
	'',
	'',
	'abc',
	'def',
	'ghi',
	'jkl',
	'mno',
	'pqrs',
	'tuv',
	'wxyz',
];

const letterCombinations = (digits) => {
	if (!digits) return [];
	let allCombinations = [];
	let cache = {};

	let dfs = (combination, id) => {
		if (combination.length === digits.length) {
			if (!cache[combination.join('')]) {
				allCombinations.push(combination.join(''));
				cache[combination.join('')] = true;
			}
			return;
		}

		for (let i = id; i < digits.length; i++) {
			console.log(digits[i]);
			for (let j = 0; j < letters[digits[id]].length; j++) {
				dfs([...combination, letters[digits[id]][j]], id + 1);
			}
		}
	};

	dfs([], 0);

	return allCombinations;
};

letterCombinations('23');
