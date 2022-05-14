const subarraySort = (array) => {
	const sorted = [...array].sort((a, b) => a - b);
	let [start, end] = [0, array.length - 1];

	while (array[start] === sorted[start] && start < array.length - 1) start++;
	if (start === array.length - 1) return [-1, -1];
	while (array[end] === sorted[end] && end >= 0) end--;

	return [start, end];
};
