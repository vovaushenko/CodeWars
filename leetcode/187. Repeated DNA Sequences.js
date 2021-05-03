// 187. Repeated DNA Sequences
// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

const findRepeatedDnaSequences = (s) => {
	const repetedDNA = [];
	const subsequences = {};
	for (let i = 0; i < s.length; i++) {
		const currentSubSeq = s.slice(i, 10 + i);
		subsequences[currentSubSeq]
			? repetedDNA.push(currentSubSeq)
			: (subsequences[currentSubSeq] = 1);
	}

	return [...new Set(repetedDNA)];
};
