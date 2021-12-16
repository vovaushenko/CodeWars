// 1 bubble sort  | 2 merge sort | 3 quick sort

const ranomArray = (length) =>
	Array(length)
		.fill(null)
		.map(() => Math.floor(Math.random() * length));

const unsorted = ranomArray(15);
console.log('🔥 Unsorted ->', unsorted);

class Sorter {
	_swap = (arr, id1, id2) => ([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);

	_mergeArrays = (arr1, arr2) => {
		let [i, j] = [0, 0];
		const mergedResult = [];
		while (i < arr1.length && j < arr2.length) {
			if (arr1[i] < arr2[j]) {
				mergedResult.push(arr1[i]);
				i++;
			} else {
				mergedResult.push(arr2[j]);
				j++;
			}
		}
		while (i < arr1.length) {
			mergedResult.push(arr1[i]);
			i++;
		}
		while (j < arr2.length) {
			mergedResult.push(arr2[j]);
			j++;
		}
		return mergedResult;
	};

	bubble(arr) {
		for (let i = arr.length; i >= 0; i--) {
			for (let j = 0; j < i; j++) {
				if (arr[j] > arr[j + 1]) this._swap(arr, j, j + 1);
			}
		}
		return arr;
	}
	merge(arr) {
		if (arr.length < 2) return arr;
		const midId = Math.floor(arr.length / 2);
		const left = this.merge(arr.slice(0, midId));
		const right = this.merge(arr.slice(midId));

		return this._mergeArrays(left, right);
	}
	quick(arr) {
		if (arr.length < 2) return arr;
		const pivotID = 0;
		const pivot = arr[pivotID];
		const lessThenPivot = [];
		const greaterThenPivot = [];

		for (let i = 1; i < arr.length; i++) {
			arr[i] < pivot
				? lessThenPivot.push(arr[i])
				: greaterThenPivot.push(arr[i]);
		}

		return [
			...this.quick(lessThenPivot),
			pivot,
			...this.quick(greaterThenPivot),
		];
	}
}

const sorter = new Sorter();

// console.log('🗯️  bubble sort -> ', sorter.bubble(unsorted));

console.log(sorter.quick(unsorted));
