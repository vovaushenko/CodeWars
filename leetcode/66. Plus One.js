// 66. Plus One
/*
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.
*/

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
