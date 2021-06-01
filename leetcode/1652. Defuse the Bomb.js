// https://leetcode.com/problems/defuse-the-bomb/

/*
1652. Defuse the Bomb

You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!
*/

const sumOfNextK = (arr, id, k) => {
	let [count, sum, i] = [0, 0, id + 1];

	while (count !== k) {
		if (i > arr.length - 1) i = 0;
		sum += arr[i];
		count++;
		i++;
	}

	return sum;
};

const sumOfPrevK = (arr, id, k) => {
	let [count, sum, i] = [0, 0, id - 1];
	while (count !== k) {
		if (i < 0) i = arr.length - 1;
		sum += arr[i];
		i--;
		count++;
	}

	return sum;
};

const decrypt = (code, k) => {
	if (k === 0) return Array.from({ length: code.length }, () => 0);
	if (k > 0) return code.map((_, id) => sumOfNextK(code, id, k));
	return code.map((_, id) => sumOfPrevK(code, id, Math.abs(k)));
};
