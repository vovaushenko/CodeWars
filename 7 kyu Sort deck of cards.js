const rank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K'];

const sortCards = (cards) =>
	cards.sort((c1, c2) => rank.indexOf(c1) - rank.indexOf(c2));
