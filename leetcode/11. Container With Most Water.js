//11. Container With Most Water
/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

const maxArea = (height) => {
	let maxArea = 0;
	let [left, right] = [0, height.length - 1];
	while (right - left) {
		let area = Math.min(height[left], height[right]) * (right - left);
		maxArea = Math.max(maxArea, area);
		height[left] > height[right] ? right-- : left++;
	}
	return maxArea;
};

const maxArea2 = (height) => {
	let [left, right] = [0, height.length - 1];
	let max = Math.min(height[left], height[right]) * (right - left);
	while (left < right) {
		if (height[left] <= height[right]) {
			left++;
		} else {
			right--;
		}
		max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
	}

	return max;
};
