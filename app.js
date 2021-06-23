// https://www.codewars.com/kata/56b861671d36bb0aa8000819

const reverse_and_combine_text = (str, words = str.split(' ')) =>
	words.length === 1
		? words[0]
		: reverse_and_combine_text(str, combineAnd(reverseWords(words)));

const reverseWords = (words) =>
	words.map((word) => [...word].reverse().join(''));
let result = '';

const combineAnd = (words) => {
	const combined = [];
	let [i, j] = [0, 1];
	while (j < words.length + 1) {
		combined.push(words[i] + (words[j] || ''));
		i += 2;
		j += 2;
	}

	return combined;
};

console.log(reverse_and_combine_text('abc def ghi 123 abx'));
