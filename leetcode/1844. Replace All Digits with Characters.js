// 1844. Replace All Digits with Characters
// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

const replaceDigits = (s) => {
	let [i, j] = [0, 1];
	let res = '';
	while (j < s.length) {
		res += s[i] + String.fromCharCode(s[i].charCodeAt(0) + +s[j]);

		i += 2;
		j += 2;
	}

	if (s.length % 2) {
		res += s[s.length - 1];
	}
	return res;
};
