// 1309. Decrypt String from Alphabet to Integer Mapping
/*
Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
Return the string formed after mapping.

It's guaranteed that a unique mapping will always exist.
*/
const freqAlphabets = (s) => {
	const alphabet = ' abcdefghijklmnopqrstuvwxyz';
	let decoded = '';
	for (let i = 0; i < s.length; i++) {
		if (s[i + 2] === '#') {
			decoded += alphabet[Number(s[i] + s[i + 1])];
			i += 2;
		} else {
			decoded += alphabet[Number(s[i])];
		}
	}

	return decoded;
};
