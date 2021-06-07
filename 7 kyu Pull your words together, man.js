const sentencify = (words) =>
	words
		.reduce((sentence, word, id) => {
			id === 0
				? (sentence += word.slice(0, 1).toUpperCase() + word.slice(1) + ' ')
				: (sentence += word + ' ');

			return sentence;
		}, '')
		.trim() + '.';
