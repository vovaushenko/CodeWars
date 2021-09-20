// https://www.codewars.com/kata/5254ca2719453dcc0b00027d

const permutations = (str) => {
	const generatePermutations = (chars) => {
		if (!chars.length) return [[]];

		const firstChar = chars[0];
		const rest = chars.slice(1);
		const permsWithoutFirstChar = generatePermutations(rest);
		const seenPerms = {};

		const allPermutations = [];
		permsWithoutFirstChar.forEach((perm) => {
			for (let i = 0; i <= perm.length; i++) {
				const validPermutation = [
					...perm.slice(0, i),
					firstChar,
					...perm.slice(i),
				].join('');
				if (!(validPermutation in seenPerms)) {
					seenPerms[validPermutation] = true;
					allPermutations.push(validPermutation);
				}
			}
		});

		return allPermutations;
	};

	return generatePermutations(str.split(''));
};
