/*
781. Rabbits in Forest

There is a forest with an unknown number of rabbits. We asked n rabbits "How many rabbits have the same color as you?" and collected the answers in an integer array answers where answers[i] is the answer of the ith rabbit.

Given the array answers, return the minimum number of rabbits that could be in the forest.
*/

const numRabbits = (answers) => {
	let ans = 0;
	const map = {};

	for (let n of answers) {
		map[n] = map[n] + 1 || 1;
		if (map[n] % (n + 1) === 1) ans += n + 1;
		if (!n) ans++;
	}

	return ans;
};
