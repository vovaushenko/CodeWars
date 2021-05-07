// https://www.codewars.com/kata/57fd696e26b06857eb0011e7

const dative = (word) => {
	const VOWELS = {
		front: ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'],
		back: ['a', 'á', 'o', 'ó', 'u', 'ú'],
	};

	const lastVowel = [...word]
		.reverse()
		.find((char) => VOWELS.front.includes(char) || VOWELS.back.includes(char));

	return VOWELS.front.includes(lastVowel) ? word + 'nek' : word + 'nak';
};
