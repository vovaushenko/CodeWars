// 6 kyu
// Faro Shuffle Count
// https://www.codewars.com/kata/57bc802c615f0ba1e3000029/train/javascript

const faroCount = (deckSize) => {
	const initialDeck = Array.from({ length: deckSize }, (_, id) => ++id);
	const stringifiedInitialDeck = initialDeck.join('');
	let count = 0;

	const helper = (deck) => {
		const [firstHalf, secondHalf] = splitDeck(deck);
		const shuffled = shuffleDecks(firstHalf, secondHalf);
		count++;
		if (shuffled.join('') === stringifiedInitialDeck && count > 0) {
			return;
		}
		helper(shuffled);
	};

	helper(initialDeck);
	return count;
};

const splitDeck = (deck) => [
	deck.slice(0, deck.length / 2),
	deck.slice(deck.length / 2),
];

const shuffleDecks = (d1, d2) =>
	d1.reduce((shuffled, card, id) => {
		shuffled.push(card, d2[id]);
		return shuffled;
	}, []);
