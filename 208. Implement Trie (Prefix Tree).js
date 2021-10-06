class Trie {
	constructor() {
		this.words = [];
		this.seenWords = {};
	}

	insert(word) {
		if (!(word in this.seenWords)) {
			this.words.push(word);
		}
		this.seenWords[word] = true;
	}
	search(word) {
		return word in this.seenWords;
	}
	startsWith(prefix) {
		return this.words.some((wrd) => wrd.startsWith(prefix));
	}
}
