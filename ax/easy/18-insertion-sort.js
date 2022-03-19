const swap = (arr, id1, id2) => ([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);

const insertionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let j = i;

		while (j > 0 && arr[j] < arr[j - 1]) {
			swap(arr, j, j - 1);
			j--;
		}
	}
	return arr;
};
