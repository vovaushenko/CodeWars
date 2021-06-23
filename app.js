// https://leetcode.com/problems/number-of-matching-subsequences/

const hashIDMap = (word) =>
	[...word].reduce((h, c, id) => (h[c] ? h[c].push(id) : (h[c] = [id]), h), {});

const isSubSequence = (word, map) => {
	let stack = [];

	for (let i = 0; i < word.length; i++) {
		if (!map[word[i]]) return false;
		if (i === 0) {
			stack.push(Math.min(...map[word[i]]));
		} else {
			let next = map[word[i]].find((freq) => freq > stack[stack.length - 1]);
			if (!next) return false;
			stack.push(next);
		}
	}

	return true;
};

const numMatchingSubseq = (s, words) => {
	const map = hashIDMap(s);

	const res = words.filter((word) => isSubSequence(word, map));

	return res.length;
};

numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace']);
