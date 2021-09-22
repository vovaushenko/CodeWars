// https://www.codewars.com/kata/5629db57620258aa9d000014

const mix = (s1, s2) => {
	const chars1 = [...s1].filter((c) => isLowercaseChar(c));
	const chars2 = [...s2].filter((c) => isLowercaseChar(c));

	const allChars = [...new Set([...chars1, ...chars2])];

	const fr1 = getFrequencyMap(chars1);
	const fr2 = getFrequencyMap(chars2);

	const res = allChars
		.map((char) => {
			const maxFrequency = Math.max(fr1[char] || 0, fr2[char] || 0);

			return `${char.repeat(maxFrequency)}`;
		})

		.filter((s) => s.length > 1)
		.map((s) => {
			let prefix = '';
			if (fr1[s[0]] === undefined) {
				prefix = '2:';
			} else if (fr2[s[0]] === undefined) {
				prefix = '1:';
			} else {
				prefix =
					fr1[s[0]] > fr2[s[0]] ? '1:' : fr1[s[0]] < fr2[s[0]] ? '2:' : 'z:';
			}

			return `${prefix}${s}`;
		})
		.sort((s1, s2) =>
			s2.length !== s1.length ? s2.length - s1.length : s1.localeCompare(s2)
		)

		.join('/')
		.replace(/z:/g, '=:');

	return res;
};

const isLowercaseChar = (char) => /[a-z]/.test(char);
const getFrequencyMap = (arr) =>
	arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
