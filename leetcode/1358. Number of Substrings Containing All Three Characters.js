// 1358. Number of Substrings Containing All Three Characters
/*
Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.
*/

const numberOfSubstrings = (s) => {
	let count = 0;

	for (let i = 0; i < s.length; i++) {
		const seen = {};
		for (let j = i; j < s.length; j++) {
			const currentChar = s[j];
			if (!(currentChar in seen)) {
				seen[currentChar] = true;
			}

			if (Object.keys(seen).length === 3) {
				count += s.length - j;
				break;
			}
		}
	}

	return count;
};
