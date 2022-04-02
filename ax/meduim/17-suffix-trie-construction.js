//https://www.algoexpert.io/questions/Suffix%20Trie%20Construction
class SuffixTrie {
	constructor(string) {
		this.root = {};
		this.endSymbol = '*';
		this.populateSuffixTrieFrom(string);
	}

	populateSuffixTrieFrom(str) {
		for (let i = 0; i < str.length; i++) {
			this._populateSubTree(i, str);
		}
	}

	_populateSubTree(startID, str) {
		let node = this.root;
		for (let i = startID; i < str.length; i++) {
			const char = str[i];
			if (!(char in node)) node[char] = {};
			node = node[char];
		}
		node[this.endSymbol] = true;
	}

	contains(string) {
		let node = this.root;
		for (const char of string) {
			if (!(char in node)) return false;
			node = node[char];
		}
		return '*' in node;
	}
}
