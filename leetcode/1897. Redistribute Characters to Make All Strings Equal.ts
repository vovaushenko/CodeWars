// 1897. Redistribute Characters to Make All Strings Equal

/*
You are given an array of strings words (0-indexed).

In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].

Return true if you can make every string in words equal using any number of operations, and false otherwise.
*/

function makeEqual(words: string[]): boolean {
	if (words.length === 1) return true;
	const hash: Record<string, number> = [...words.join('')].reduce(
		(h, c) => ((h[c] = h[c] + 1 || 1), h),
		{} as Record<string, number>
	);

	let frequencies = Object.values(hash);

	for (let fr of frequencies) {
		if (fr === 1 && words.length > 1) return false;
		if (fr % words.length !== 0) return false;
	}

	return true;
}
