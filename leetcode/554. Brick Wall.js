// 554. Brick Wall
/*
There is a rectangular brick wall in front of you with n rows of bricks. The ith row has some number of bricks each of the same height (i.e., one unit) but they can be of different widths. The total width of each row is the same.

Draw a vertical line from the top to the bottom and cross the least bricks. If your line goes through the edge of a brick, then the brick is not considered as crossed. You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.

Given the 2D array wall that contains the information about the wall, return the minimum number of crossed bricks after drawing such a vertical line.
*/

//! The most frequent prefix sum location crosses the fewest bricks:
const leastBricks = (wall) => {
	const map = {};
	let max = 0;
	for (let row of wall) {
		let rowSum = 0;
		for (let i = 0; i < row.length - 1; i++) {
			rowSum += row[i];
			map[rowSum] ? map[rowSum]++ : (map[rowSum] = 1);

			max = Math.max(max, map[rowSum]);
		}
	}
	return wall.length - max;
};
