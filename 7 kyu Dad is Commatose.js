const dadFilter = (str) =>
	str
		.trim()
		.split(',')
		.filter((c) => c)
		.join(',');
