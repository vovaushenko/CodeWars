// https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e

const wordPattern = (word) => {
	word = word.toLowerCase();
	const map = {};
	let counter = 0;
	for (let char of word) {
		if (!(char in map)) {
			map[char] = counter;
			counter++;
		}
	}

	return [...word].map((char) => map[char]).join('.');
};
