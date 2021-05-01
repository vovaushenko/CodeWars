// 648. Replace Words
// In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word successor. For example, when the root "an" is followed by the successor word "other", we can form a new word "another".

// Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with the root forming it. If a successor can be replaced by more than one root, replace it with the root that has the shortest length.

// Return the sentence after the replacement.

const replaceWords = (dictionary, sentence) => {
	const words = sentence.split(' ');

	for (let i = 0; i < words.length; i++) {
		let possibleRoots = [];
		for (let root of dictionary) {
			if (words[i].startsWith(root)) {
				possibleRoots.push(root);
			}
		}
		possibleRoots.sort((a, b) => a.length - b.length);

		if (possibleRoots.length) {
			words[i] = possibleRoots[0];
		}
	}

	return words.join(' ');
};

console.log(
	replaceWords(
		['catt', 'cat', 'bat', 'rat'],
		'the cattle was rattled by the battery'
	)
);
