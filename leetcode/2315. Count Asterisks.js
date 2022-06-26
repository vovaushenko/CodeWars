//2315. Count Asterisks
const isAsterisk = (char) => char === '*';

const countAsterisks = (s) => {
	let isOpen = false;
	let asterisks = 0;

	for (const char of s) {
		if (isAsterisk(char) && !isOpen) asterisks++;

		if (char === '|') {
			isOpen ? (isOpen = false) : (isOpen = true);
		}
	}

	return asterisks;
};
