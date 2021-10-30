const ADJACENT = {
	1: [2, 4],
	2: [1, 3, 5],
	3: [2, 6],
	4: [1, 5, 7],
	5: [2, 4, 6, 8],
	6: [3, 5, 9],
	7: [4, 8],
	8: [5, 7, 9, 0],
	9: [6, 8],
	0: [8],
};

const getAdjecentNums = (observed) => [
	...new Set(
		[...observed].reduce(
			(acc, num) => (acc.push(...ADJACENT[+num], +num), acc),
			[]
		)
	),
];

const generatePermutations = (nums) => {
	if (!nums.length) return [[]];

	const firstNum = nums[0];
	const rest = nums.slice(1);

	const permutationsWithoutFirst = generatePermutations(rest);
	const allPermutations = [];

	permutationsWithoutFirst.forEach((perm) => {
		for (let i = 0; i < 2; i++) {
			const permWithFirst = [...perm.slice(0, i), firstNum, ...perm.slice(i)];
			allPermutations.push(permWithFirst);
		}
	});

	return allPermutations;
};

console.log(getAdjecentNums('369'));

const getPINs = (observed) => {
	const adjecentNums = getAdjecentNums(observed).sort((a, b) => a - b);
	console.log(adjecentNums);
	const seenCombos = {};
	console.log(generatePermutations([1, 1]));
};

console.log(getPINs('1357'));
