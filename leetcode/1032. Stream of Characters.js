// 1032. Stream of Characters

class TrieNode {
	constructor(val) {
		this.val = val;
		this.children = {};
		this.end = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode('^');
	}

	addWord(word) {
		let lastNode = this.root;
		for (let i = 0; i < word.length; i++) {
			const char = word[i];
			if (!lastNode.children[char]) {
				lastNode.children[char] = new TrieNode(char);
			}
			lastNode = lastNode.children[char];
			if (i === word.length - 1) lastNode.end = true;
		}
	}

	contains(word) {
		let lastNode = this.root;
		for (let i = 0; i < word.length; i++) {
			const char = word[i];

			if (!lastNode.children[char]) {
				// word is not in trie
				return false;
			} else {
				lastNode = lastNode.children[char];
			}

			if (i === word.length - 1 && lastNode.end) {
				// full match -> true
				return true;
			} else if (i === word.length - 1) {
				// if partial match, returns lastNode
				return lastNode;
			}
		}
		return false;
	}
}

class StreamChecker {
	constructor(words) {
		this.trie = new Trie();
		this.chars = [];
		words.forEach((word) => this.trie.addWord([...word].reverse().join('')));
	}

	query(char) {
		this.chars.unshift(char);
		let potentialMatch = '';
		for (let char of this.chars) {
			potentialMatch = potentialMatch + char;
			let isInTree = this.trie.contains(potentialMatch);
			if (isInTree) return true;
			if (!isInTree) return false;
		}
		return false;
	}
}
