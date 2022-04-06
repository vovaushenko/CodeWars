const threeNumberSort = (arr, order) => {
	const map = arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
	const [first, second, third] = order;

	for (let i = 0; i < arr.length; i++) {
		if (map[first]) {
			arr[i] = first;
			map[first]--;
		} else if (!map[first] && map[second]) {
			arr[i] = second;
			map[second]--;
		} else {
			arr[i] = third;
		}
	}

	return arr;
};
