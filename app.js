// 819. Most Common Word
/*

Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

*/
const mostCommonWord = (paragraph, banned) => {
	let words = paragraph
		.replace(/[^\w\s]|_/g, ' ')
		.toLowerCase()
		.split(' ')
		.filter((c) => c);

	let frequencies = {};

	for (let word of words) {
		if (!banned.includes(word)) {
			frequencies[word] ? frequencies[word]++ : (frequencies[word] = 1);
		}
	}

	const sortedByFrequency = Object.entries(frequencies).sort(
		(a, b) => b[1] - a[1]
	);

	return sortedByFrequency[0][0];
};

console.log(mostCommonWord('a, a, a, a, b,b,b,c, c', ['a']));
