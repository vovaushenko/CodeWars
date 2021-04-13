// 120. Triangle
// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

const minimumTotal = (triangle: number[][]): number => {
  for (let i = triangle.length - 2; i >= 0; i--) {
    triangle[i] = triangle[i].map(
      (num, id) => num + Math.min(triangle[i + 1][id], triangle[i + 1][id + 1])
    );
  }

  return triangle[0][0];
};

console.log(minimumTotal([[1], [2, 3], [4, 5, 6]]));
