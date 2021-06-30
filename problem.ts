export const swap = (id1: number, id2: number, arr: number[]): number[] =>
	([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);

let array = [9, 1, 4, 8, 12, 1, 2];

const bSort = (arr: number[]): number[] => {
	for (let i = arr.length; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[i]) swap(i, j, arr);
		}
	}

	return arr;
};

bSort(array);
console.log(array);
