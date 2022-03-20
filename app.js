'use strict';

const binarySearch = (arr, target) => {
	let [start, end] = [0, arr.length - 1];
	let mid = Math.floor((start + end) / 2);

	while (arr[mid] !== target && start < end) {
		if (target > arr[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
		mid = Math.floor((start + end) / 2);
	}

	return arr[mid] === target ? mid : -1;
};

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 75));
