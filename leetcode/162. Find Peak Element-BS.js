const findPeakElement = (arr) => {
	if (arr.length < 3) return arr.indexOf(Math.max(...arr));
	let start = 0;
	let end = arr.length - 1;
	let mid = Math.floor((start + end) / 2);

	while (!isPeakElement(arr[mid - 1], arr[mid], arr[mid + 1]) && start < end) {
		if (arr[mid + 1] >= arr[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
		mid = Math.floor((start + end) / 2);
	}

	return mid;
};

const isPeakElement = (prev, possiblePeak, next) =>
	(possiblePeak > next && possiblePeak > prev) ||
	(possiblePeak > next && prev === undefined);
