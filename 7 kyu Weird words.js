// https://www.codewars.com/kata/57b2020eb69bfcbf64000375

const nextLetter = (str) =>
	[...str].map((char) => transformToNextLetter(char)).join('');

const transformToNextLetter = (char) => {
	if (!char.match(/[a-z]/i)) return char;
	if (char === 'z') return 'a';
	if (char === 'Z') return 'A';

	return String.fromCharCode(char.charCodeAt(0) + 1);
};
