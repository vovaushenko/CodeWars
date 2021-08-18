// 942. DI String Match
/*
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

*/

const diStringMatch = (s) => {
	let [min, max] = [0, s.length];
	const res = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'I') {
			res.push(min);
			min++;
		} else {
			res.push(max);
			max--;
		}
	}
	res.push(min);
	return res;
};
