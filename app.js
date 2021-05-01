// 1844. Replace All Digits with Characters

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

console.log(replaceDigits('a1b2c3d4e'));
