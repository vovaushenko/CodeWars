//937. Reorder Data in Log Files

const reorderLogFiles = (logs) => {
	const [letterLogs, digitLogs] = [[], []];

	for (const log of logs) {
		if (/ \d/.test(log)) {
			digitLogs.push(log);
		} else {
			letterLogs.push(log);
		}
	}

	letterLogs.sort((a, b) => {
		const aB = a.slice(a.indexOf(' ') + 1);

		const bB = b.slice(b.indexOf(' ') + 1);

		const comp = aB.localeCompare(bB);

		if (comp) return comp;

		return a.localeCompare(b);
	});

	return [...letterLogs, ...digitLogs];
};
