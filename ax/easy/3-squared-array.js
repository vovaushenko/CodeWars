const sortedSquaredArray = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] ** 2;
	}
	return arr.sort((a, b) => a - b);
};

console.log(sortedSquaredArray([-5, -4, -3, -2, -1]));
// Efficient way
const sortedSquaredArray2 = (arr) => {
	const res = new Array(arr.length).fill(0);
	let [negative, positive] = [0, arr.length - 1];
	for (let i = arr.length - 1; i >= 0; i--) {
		const negativeVal = arr[negative];
		const positiveVal = arr[positive];
		if (Math.abs(negativeVal) > Math.abs(positiveVal)) {
			res[i] = negativeVal ** 2;
			negative++;
		} else {
			res[i] = positiveVal ** 2;
			positive--;
		}
	}
	return res;
};
