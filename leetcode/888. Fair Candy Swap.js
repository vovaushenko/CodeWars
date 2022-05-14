//888. Fair Candy Swap
const fairCandySwap = (a, b) => {
	const [sumA, sumB] = [a, b].map((e) => e.reduce((x, y) => x + y, 0));
	const diff = (sumA - sumB) / 2;

	const setA = new Set(a);
	for (const candy of b) {
		if (setA.has(candy + diff)) return [candy + diff, candy];
	}
};
