const intDiff = (arr, n) => {
	let pairs = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (Math.abs(arr[j] - arr[i]) === n) pairs++;
		}
	}
	return pairs;
};
