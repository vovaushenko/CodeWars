// 945. Minimum Increment to Make Array Unique

/*
Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.

Return the least number of moves to make every value in A unique.

*/

const minIncrementForUnique = (list) => {
	const uniqueNumbers = {};
	let incrementCounter = 0;
	for (let number of list) {
		while (number in uniqueNumbers) {
			number++;
			incrementCounter++;
		}
		uniqueNumbers[number] = true;
	}
	return incrementCounter;
};
