// 1385. Find the Distance Value Between Two Arrays

const findTheDistanceValue = (arr1, arr2, d) => {
	let count = 0;

	for (const num of arr1) {
		if (arr2.every((n) => Math.abs(n - num) > d)) count++;
	}

	return count;
};
