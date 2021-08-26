// https://leetcode.com/problems/print-words-vertically/

const printVertically = (s) => {
	let res = [];
	const words = s.split(' ');
	const longestLength = Math.max(...words.map((w) => w.length));

	for (let word of words) {
		for (let i = 0; i < longestLength; i++) {
			let char = word[i] ? word[i] : ' ';
			res[i] ? (res[i] += char) : (res[i] = char);
		}
	}

	return res.map((w) => w.trimEnd());
};
