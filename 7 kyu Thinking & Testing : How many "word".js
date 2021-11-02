const testit = (s) => {
	const word = ['w', 'o', 'r', 'd'];
	let currentID = 0;
	let wordCount = 0;

	for (let char of s) {
		if (char.toLowerCase() === word[currentID]) {
			currentID++;
		}
		if (currentID === 4) {
			wordCount++;
			currentID = 0;
		}
	}

	return wordCount;
};
