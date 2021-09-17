const naughtyOrNice = (data) => {
	const flattened = [];
	for (let month in data) {
		flattened.push(...Object.values(data[month]));
	}

	const niceCount = flattened.filter((b) => b === 'Nice').length;
	const naughtyCount = flattened.filter((b) => b === 'Naughty').length;

	return niceCount >= naughtyCount ? 'Nice!' : 'Naughty!';
};
