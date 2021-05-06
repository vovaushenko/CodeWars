// 1078. Occurrences After Bigram

/*
Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

For each such occurrence, add "third" to the answer, and return the answer.
*/

const findOcurrences = (text, first, second) => {
	const words = text.split(' ');
	let [i, j, k] = [0, 1, 2];
	const res = [];

	while (k < words.length) {
		if (words[i] === first && words[j] === second) {
			words[k] && res.push(words[k]);
		}
		i++;
		j++;
		k++;
	}
	return res;
};

console.log(
	findOcurrences('alice is a good girl she is a good student', 'a', 'good')
);
