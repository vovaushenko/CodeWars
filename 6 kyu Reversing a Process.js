// 6 kyu
// Reversing a Process

const CHAR_COUNT = 26;
const ASCII_START = 97;

const decode = (r) => {
	const num = parseInt(r);
	const letters = Array.from({ length: CHAR_COUNT }, (_, i) =>
		String.fromCharCode(ASCII_START + i)
	);
	const encodedLetters = Array.from({ length: CHAR_COUNT }, (_, i) =>
		String.fromCharCode(((i * num) % CHAR_COUNT) + ASCII_START)
	);

	if ([...new Set(encodedLetters)].length !== CHAR_COUNT) {
		return 'Impossible to decode';
	}

	console.log(letters);
	console.log(encodedLetters);

	return r
		.match(/[a-z]/gi)
		.map((ch) => letters[encodedLetters.indexOf(ch)])
		.join('');
};
