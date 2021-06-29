const getUsersIds = (str) => {
	const chunks = str
		.replace(/#/gi, '')
		.trim()
		.toLowerCase()
		.split(',')
		.map((c) => c.trim().replace(/^uid/, '').trim());
	return chunks;
};
console.log(getUsersIds('in name whitespace'));
