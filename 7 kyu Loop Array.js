// https://www.codewars.com/kata/59098c39d8d24d12b6000020

const loopArr = (arr, direction, steps) => {
	let operationCount = 0;
	while (operationCount < steps) {
		if (direction === 'left') arr.push(arr.shift());
		if (direction === 'right') arr.unshift(arr.pop());
		operationCount++;
	}

	return arr;
};
