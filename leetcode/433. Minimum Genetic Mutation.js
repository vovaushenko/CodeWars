// 433. Minimum Genetic Mutation
/*
A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.

Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.

Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene. If there is no such a mutation, return -1.

Note that the starting point is assumed to be valid, so it might not be included in the bank.
*/
function minMutation(start, end, bank) {
	const options = ['A', 'C', 'G', 'T'];
	let set = new Set(bank);
	if (!set.has(end)) return -1;
	let q = [start];
	let steps = 0;
	while (q.length) {
		let len = q.length;
		for (let i = 0; i < len; i++) {
			let dna = q.shift();
			// try all one step moves
			for (let j = 0; j < 8; j++) {
				for (let option of options) {
					const newDNA = dna.slice(0, j) + option + dna.slice(j + 1);
					if (newDNA === end) {
						return steps + 1;
					}

					if (set.has(newDNA)) {
						set.delete(dna);
						q.push(newDNA);
					}
				}
			}
		}

		steps++;
	}

	return -1;
}
