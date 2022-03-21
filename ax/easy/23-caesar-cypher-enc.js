const shiftLetter = (letter, key) => {
	const shiftedLetterCode = letter.charCodeAt(0) + key;
	return shiftedLetterCode <= 122
		? String.fromCharCode(shiftedLetterCode)
		: String.fromCharCode(96 + (shiftedLetterCode % 122));
};

const caesarCipherEncryptor = (string, key) =>
	[...string].map((letter) => shiftLetter(letter, key % 26)).join('');
