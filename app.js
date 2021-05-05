// 66. Plus One

const plusOne = (arr) => {
	for (let i = arr.length - 1; i >= 0; i--) {
		arr[i] = arr[i] + 1;

		if (arr[i] !== 10) {
			break;
		} else {
			arr[i] = 0;
			if (i === 0) {
				arr.unshift(1);
				break;
			}
		}
	}

	return arr;
};

console.log(plusOne([9, 9]));
