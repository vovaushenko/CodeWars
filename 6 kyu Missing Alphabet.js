// https://www.codewars.com/kata/5ad1e412cc2be1dbfb000016

const insertMissingLetters = (str) => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';

	let missingLetters = [...alphabet].filter((letter) => !str.includes(letter));
	const seen = {};
	let res = [];

	for (let char of str) {
		res.push(char);
		if (!seen[char]) {
			res.push(
				missingLetters
					.filter((letter) => letter.charCodeAt(0) > char.charCodeAt(0))
					.join('')
					.toUpperCase()
			);
		}
		seen[char] = true;
	}

	return res.join('');
};
