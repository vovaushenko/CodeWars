//2284. Sender With Largest Word Count

const largestWordCount = (messages, senders) => {
	let map = {};

	for (let i = 0; i < senders.length; i++) {
		const sender = senders[i];

		map[sender]
			? (map[sender] += messages[i].split(' ').length)
			: (map[sender] = messages[i].split(' ').length);
	}

	const maxWords = Math.max(...Object.values(map));

	const winners = Object.keys(map)

		.filter((sndr) => map[sndr] === maxWords)

		.sort();

	return winners[winners.length - 1];
};
