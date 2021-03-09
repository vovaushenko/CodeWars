// 1051. Height Checker
// Students are asked to stand in non-decreasing order of heights for an annual photo.

// Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

const heightChecker = (heights: number[]): number => {
  const referrence = [...heights].sort((a, b) => a - b);
  let difference = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== referrence[i]) difference++;
  }

  return difference;
};
