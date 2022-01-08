// 6 kyu
// Wave Sorting
const swap = (arr, id1, id2) => ([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);

const waveSort = (arr) => {
	arr.sort((a, b) => a - b);
	let [i, j] = [0, 1];

	while (j < arr.length) {
		swap(arr, i, j);
		i += 2;
		j += 2;
	}
};
