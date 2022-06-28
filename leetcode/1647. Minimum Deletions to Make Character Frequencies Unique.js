//1647. Minimum Deletions to Make Character Frequencies Unique

const minDeletions = (s) => {
	const sortedFrequencies = Object.values(
		[...s].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {})
	).sort((a, b) => a - b);

	const seen = {};
	let count = 0;

	for (let fr of sortedFrequencies) {
		if (!(fr in seen)) {
			seen[fr] = true;
		} else {
			while (seen[fr]) {
				fr--;
				count++;
			}
			if (fr) seen[fr] = true;
		}
	}
};
