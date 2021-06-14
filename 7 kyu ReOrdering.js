// https://www.codewars.com/kata/5785cd91a1b8d5c06e000007

const reOrdering = (text) => {
	let words = text.split(' ');
	for (let i = 0; i < words.length; i++) {
		if (isUpperCase(words[i][0])) {
			words.unshift(...words.splice(i, 1));
			i += 2;
		}
	}

	return words.join(' ');
};

const isUpperCase = (char) => char.toUpperCase() === char;
