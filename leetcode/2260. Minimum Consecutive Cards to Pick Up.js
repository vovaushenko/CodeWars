//2260. Minimum Consecutive Cards to Pick Up
const minimumCardPickup = (cards) => {
	let min = Infinity;

	let map = new Map();

	for (let i = 0; i < cards.length; i++) {
		const currentCard = cards[i];

		if (!map.has(currentCard)) {
			map.set(currentCard, i);
		} else {
			min = Math.min(min, i - map.get(currentCard));

			map.set(currentCard, i);
		}
	}

	return min === Infinity ? -1 : min + 1;
};
