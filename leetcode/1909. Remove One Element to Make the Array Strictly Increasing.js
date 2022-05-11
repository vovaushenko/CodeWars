//1909. Remove One Element to Make the Array Strictly Increasing

const isIncreasing = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i - 1] >= arr[i]) return false;
	}

	return true;
};

const canBeIncreasing = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (isIncreasing([...arr.slice(0, i), ...arr.slice(i + 1)])) return true;
	}

	return false;
};
