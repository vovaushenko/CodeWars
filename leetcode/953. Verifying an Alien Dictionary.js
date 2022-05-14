//953. Verifying an Alien Dictionary

const inValidOrder = (word1, word2, map) => {
	if (word2.startsWith(word1)) return true;

	if (word1 === word2) return true;

	for (let i = 0; i < word1.length; i++) {
		if (!word2[i] && word1[i]) return false;

		if (word2[i] && !word1[i]) return true;

		const [weight1, weight2] = [map[word1[i]], map[word2[i]]];

		if (weight1 > weight2) return false;

		if (weight1 < weight2) return true;
	}

	return false;
};

const isAlienSorted = (words, order) => {
	const map = [...order].reduce((h, c, id) => ((h[c] = id), h), {});

	let [i, j] = [0, 1];

	while (j < words.length) {
		if (!inValidOrder(words[i], words[j], map)) return false;

		i++;

		j++;
	}

	return true;
};
