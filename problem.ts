export {};

// 1 sorts -> merge -> bubble

function merge(a1: number[], a2: number[]): number[] {
	let [i, j] = [0, 0];
	let merged: number[] = [];

	while (i < a1.length && j < a2.length) {
		if (a1[i] < a2[j]) {
			merged.push(a1[i]);
			i++;
		} else {
			merged.push(a2[j]);
			j++;
		}
	}

	while (i < a1.length) {
		merged.push(a1[i]);
		i++;
	}
	while (j < a2.length) {
		merged.push(a2[j]);
		j++;
	}

	return merged;
}

function mergeSort(arr: number[]): number[] {
	if (arr.length < 2) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

console.log(mergeSort([9, 4, 1, 3, 6, 5, 5, 999]));
