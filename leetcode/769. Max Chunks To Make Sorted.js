//769. Max Chunks To Make Sorted

const areEqual = (a, b) =>
	a.length === b.length && a.every((num, id) => num === b[id]);

const maxChunksSorted = (arr) => {
	const sorted = [...arr].sort((a, b) => a - b);
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		const left = arr.slice(0, i + 1);
		const right = sorted.slice(0, i + 1);
		left.sort((a, b) => a - b);
		if (areEqual(left, right)) count++;
	}
	return count;
};
