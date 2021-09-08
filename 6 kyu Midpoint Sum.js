// https://www.codewars.com/kata/54d3bb4dfc75996c1c000c6d

const midpointSum = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		const leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
		const rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);
		if (leftSum === rightSum && i !== 0 && i !== arr.length - 1) return i;
	}
	return null;
};
