//17. Letter Combinations of a Phone Number
/*

*/

const letterCombinations = (digits) => {
	if (!digits) return [];

	const MAP = {
		2: ['a', 'b', 'c'],

		3: ['d', 'e', 'f'],

		4: ['g', 'h', 'i'],

		5: ['j', 'k', 'l'],

		6: ['m', 'n', 'o'],

		7: ['p', 'q', 'r', 's'],

		8: ['t', 'u', 'v'],

		9: ['w', 'x', 'y', 'z'],
	};

	const combos = [];

	const createCombination = (currentCombo, startId) => {
		if (currentCombo.length === digits.length) {
			return combos.push(currentCombo);
		}

		for (let char of MAP[digits[startId]]) {
			createCombination(currentCombo + char, startId + 1);
		}
	};

	createCombination('', 0);

	return combos;
};
