// 1286. Iterator for Combination
/*
Design the CombinationIterator class:

CombinationIterator(string characters, int combinationLength) Initializes the object with a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
next() Returns the next combination of length combinationLength in lexicographical order.
hasNext() Returns true if and only if there exists a next combination.
*/
class CombinationIterator {
	constructor(characters, combinationLength) {
		this.chars = [...characters];
		this.combinationLength = combinationLength;
		this.combos = this.generateCombos().sort();
		this.pointer = 0;
	}

	generateCombos() {
		const permutations = [];

		const permute = (permutation, start) => {
			if (permutation.length === this.combinationLength) {
				permutations.push(permutation.join(''));
				return;
			}

			for (let i = start; i < this.chars.length; i++) {
				permute([...permutation, this.chars[i]], i + 1);
			}
		};
		permute([], 0);

		return permutations;
	}

	hasNext() {
		return this.pointer < this.combos.length;
	}

	next() {
		const current = this.combos[this.pointer];
		this.pointer++;
		return current;
	}
}
