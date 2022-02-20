//2177. Find Three Consecutive Integers That Sum to a Given Number
/*
Given an integer num, return three consecutive integers (as a sorted array) that sum to num. If num cannot be expressed as the sum of three consecutive integers, return an empty array.
*/
const sumOfThree = (num) => {
	const candidates = Array.from({ length: num }, (_, id) => ++id);
	let [i, j, k] = [0, 1, 2];
	while (k < candidates.length) {
		if (candidates[i] + candidates[j] + candidates[k] === num)
			return [candidates[i], candidates[j], candidates[k]];
		i++;
		j++;
		k++;
	}

	return [];
};

const sumOfThree = (num) =>
	num % 3 ? [] : [num / 3 - 1, num / 3, num / 3 + 1];
