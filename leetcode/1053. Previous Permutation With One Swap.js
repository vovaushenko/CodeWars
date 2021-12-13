// 1053. Previous Permutation With One Swap
/*
Given an array of positive integers arr (not necessarily distinct), return the lexicographically largest permutation that is smaller than arr, that can be made with exactly one swap (A swap exchanges the positions of two numbers arr[i] and arr[j]). If it cannot be done, then return the same array.
*/

// https://leetcode.com/problems/previous-permutation-with-one-swap/

// BRUTE FORCE
const swap = (arr, id1, id2) => ([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);

const prevPermOpt1 = (arr) => {
	const permutations = [arr];

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			const copy = [...arr];
			swap(copy, i, j);
			permutations.push(copy);
		}
	}
	permutations.sort((p1, p2) => p2.join('') - p1.join(''));

	let originalID = null;

	for (let i = 0; i < permutations.length; i++) {
		const currentPerm = permutations[i];
		if (currentPerm.join('') === arr.join('')) {
			originalID = i;
		}
	}
	if (permutations[originalID + 1]) {
		return permutations[originalID + 1];
	}

	return arr;
};

console.log(
	prevPermOpt1([
		1, 9, 6, 7, 9, 6, 4, 4, 2, 2, 7, 7, 7, 6, 3, 5, 7, 7, 3, 8, 8, 4, 4, 1, 5,
		4, 7, 4, 7, 3, 7, 5, 4, 1, 7, 4, 9, 6, 5, 9, 8, 9, 9, 4, 6, 6, 5, 5, 7, 7,
		8, 1, 4, 6, 4, 5, 4, 4, 8, 9, 5, 7, 2, 4,
	])
);

const prevPermOpt1 = (arr) => {
	const n = arr.length;
	let i = n - 1;

	while (i > 0 && arr[i] >= arr[i - 1]) i--;

	if (i === 0) return arr;

	const swapIndex = i - 1;
	const swapDigit = arr[swapIndex];

	let maxIndex = i;
	i = n - 1;

	while (swapIndex < i) {
		const currDigit = arr[i];

		if (currDigit < swapDigit && currDigit >= arr[maxIndex]) maxIndex = i;
		i--;
	}

	[arr[maxIndex], arr[swapIndex]] = [arr[swapIndex], arr[maxIndex]];

	return arr;
};
