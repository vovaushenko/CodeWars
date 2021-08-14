// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

const areAlmostEqual = (s1, s2) => {
	if (s1 === s2) return true;

	const ids = [];

	for (let i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) {
			ids.push(i);
		}
		if (ids.length > 2) return false;
	}

	if (s1[ids[1]] === s2[ids[0]] && s1[ids[0]] === s2[ids[1]]) {
		return true;
	}

	return false;
};
