const wordCount = (s) =>
	s
		.replace(/[^A-Za-z]/g, ' ')
		.split(' ')
		.filter(
			(word) =>
				word.length &&
				!['a', 'the', 'on', 'at', 'of', 'upon', 'in', 'as'].includes(
					word.toLowerCase()
				)
		).length;
