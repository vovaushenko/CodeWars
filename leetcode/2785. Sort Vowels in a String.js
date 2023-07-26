/**
 * @param {string} s
 * @return {string}
 */
const isVowel = (c) => 'aeiouAEIOU'.includes(c);

var sortVowels = function (s) {
	const vowels = [...s]
		.filter(isVowel)
		.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
	let res = [...s];
	let vowelId = 0;

	for (let i = 0; i < res.length; i++) {
		if (isVowel(res[i])) {
			res[i] = vowels[vowelId];
			vowelId++;
		}
	}

	return res.join('');
};
