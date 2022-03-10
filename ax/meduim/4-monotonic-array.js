const isMonotonicIncreasing = (arr) => {
	let [i, j] = [0, 1];
	while (j < arr.length) {
		if (arr[j] < arr[i]) return false;

		i++;
		j++;
	}
	return true;
};
const isMonotonicDecreasing = (arr) => {
	let [i, j] = [0, 1];
	while (j < arr.length) {
		if (arr[j] > arr[i]) return false;

		i++;
		j++;
	}
	return true;
};

const isMonotonic = (arr) =>
	isMonotonicIncreasing(arr) || isMonotonicDecreasing(arr);
