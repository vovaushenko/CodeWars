// https://www.codewars.com/kata/565b9d6f8139573819000056/train/javascript
const decode = (message) => {
	const REVERSED_ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse();
	return [...message]
		.map((char) =>
			REVERSED_ALPHABET.includes(char)
				? REVERSED_ALPHABET[char.charCodeAt(0) - 97]
				: char
		)
		.join('');
};
