// https://www.codewars.com/kata/59de469cfc3c492da80000c5

const compress = (sentence) => {
	const words = sentence.toLowerCase().split(' ');
	const lookup = new Map();
	let compressed = '';
	let count = 0;

	for (let i = 0; i < words.length; i++) {
		const currentWord = words[i];
		if (lookup.has(currentWord)) {
			compressed += lookup.get(currentWord);
		} else {
			lookup.set(currentWord, count);
			compressed += count;
			count++;
		}
	}

	return compressed;
};
