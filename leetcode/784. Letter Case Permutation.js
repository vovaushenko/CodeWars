// 784. Letter Case Permutation
/*
Given a string s, we can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. You can return the output in any order.
*/
const letterCasePermutation = (s) => {
	const res = [];

	const permute = (i, permutation) => {
		if (i === s.length) {
			res.push(permutation);
			return;
		}
		permute(i + 1, permutation + s[i].toLowerCase());
		if (/[a-zA-Z]/.test(s[i])) {
			permute(i + 1, permutation + s[i].toUpperCase());
		}
	};

	permute(0, '');
	return res;
};
