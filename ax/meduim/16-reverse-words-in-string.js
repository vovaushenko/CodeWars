//https://www.algoexpert.io/questions/Reverse%20Words%20In%20String
const reverse = (word) => {
	let reversed = '';

	for (let i = word.length - 1; i >= 0; i--) reversed += word[i];
	return reversed;
};

const reverseWordsInString = (string) => {
	let word = '';
	let spaces = '';
	const reversedResult = [];
	for (let i = string.length - 1; i >= 0; i--) {
		if (string[i] === ' ') {
			spaces += ' ';
			if (string[i - 1] !== ' ') {
				reversedResult.push(reverse(word));
				reversedResult.push(spaces);
				spaces = '';
				word = '';
			}
		} else {
			word += string[i];
		}
	}

	if (word.length !== 0) reversedResult.push(reverse(word));
	if (spaces.length !== 0) reversedResult.push(reverse(spaces));

	return reversedResult.join('');
};
