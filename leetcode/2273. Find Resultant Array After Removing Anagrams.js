//2273. Find Resultant Array After Removing Anagrams
const areAnagrams = (w1, w2) =>
	[...w1].sort().join('') === [...w2].sort().join('');

const removeAnagrams = (words) => {
	if (words.length === 1) return words;

	let res = [];

	const helper = (wordsLeft) => {
		if (!wordsLeft.length) return;

		let [i, j] = [0, 1];

		while (j < wordsLeft.length - 1) {
			if (areAnagrams(wordsLeft[i], wordsLeft[j])) {
				return helper([...wordsLeft.slice(0, j), ...wordsLeft.slice(j + 1)]);
			}

			i++;

			j++;
		}

		if (j === wordsLeft.length - 1) {
			return (res = [...wordsLeft]);
		}
	};

	helper(words);

	if (
		res.length >= 2 &&
		areAnagrams(res[res.length - 1], res[res.length - 2])
	) {
		return res.slice(0, res.length - 1);
	}

	return res;
};
