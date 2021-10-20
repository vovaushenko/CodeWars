const divisorGame = (n) => {
	const table = Array(n + 1).fill(false);

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i / 2; j++) {
			if (i % j === 0 && table[i - j] === false) {
				table[i] = true;
				break;
			}
		}
	}

	return table[n];
};
