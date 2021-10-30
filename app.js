const isValidWord = (token) => {
	return /^(([a-z]?)|([a-z]+\-?[a-z]+))[!.,]?$/.test(token);
};

const countValidWords = (sentence) =>
	sentence
		.split(' ')
		.filter((_) => _)
		.filter((token) => isValidWord(token)).length;

console.log(isValidWord(''));

console.log(isValidWord('dsa'));

console.log(countValidWords('cat and  dog'));
