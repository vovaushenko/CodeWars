const minTimeToType = (word) => {
	let currentChar = 'a';
	let steps = 0;

	for (let char of word) {
		const move = Math.abs(char.charCodeAt(0) - currentChar.charCodeAt(0));
		if (move) steps += Math.min(move, 26 - move);
		currentChar = char;
		steps++;
	}

	return steps;
};
