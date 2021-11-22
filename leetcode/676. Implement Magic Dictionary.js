// 676. Implement Magic Dictionary
/*
Design a data structure that is initialized with a list of different words. Provided a string, you should determine if you can change exactly one character in this string to match any word in the data structure.

Implement the MagicDictionary class:

MagicDictionary() Initializes the object.
void buildDict(String[] dictionary) Sets the data structure with an array of distinct strings dictionary.
bool search(String searchWord) Returns true if you can change exactly one character in searchWord to match any string in the data structure, otherwise returns false.
*/

class MagicDictionary {
	constructor() {
		this.words = [];
	}

	buildDict(dictionary) {
		this.words = dictionary;
	}

	search(searchWord) {
		for (let word of this.words) {
			if (searchWord === word) continue;
			if (word.length !== searchWord.length) {
				continue;
			}
			let diff = 0;
			for (let i = 0; i < word.length; i++) {
				if (word[i] !== searchWord[i]) {
					diff++;
				}
				if (diff > 1) continue;
			}
			if (diff === 1) return true;
		}

		return false;
	}
}
