//84. Largest Rectangle in Histogram
/*
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
*/
const largestRectangleArea = (heights) => {
	let maxRect = -Infinity;
	for (let i = 0; i < heights.length; i++) {
		let minHeight = heights[i];
		for (let j = i; j < heights.length; j++) {
			let currentHeight = heights[j];
			if (currentHeight <= minHeight) minHeight = currentHeight;

			maxRect = Math.max(maxRect, minHeight * (j - i + 1));
		}
	}
	return maxRect;
};
