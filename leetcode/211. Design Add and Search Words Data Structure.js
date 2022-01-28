//211. Design Add and Search Words Data Structure
/*
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
*/
class WordDictionary {
	constructor() {
		this.words = new Map();
	}
	addWord(word) {
		const len = word.length;
		return this.words.has(len)
			? this.words.get(len).push(word)
			: this.words.set(len, [word]);
	}
	search(word) {
		if (!this.words.has(word.length)) return false;

		const candidates = this.words.get(word.length);

		for (const candidate of candidates) {
			if (this.areSame(candidate, word)) return true;
		}

		return false;
	}

	areSame(word1, word2) {
		for (let i = 0; i < word2.length; i++) {
			if (word2[i] === '.') continue;
			if (word1[i] !== word2[i]) return false;
		}
		return true;
	}
}
