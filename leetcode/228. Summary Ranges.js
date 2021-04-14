// 228. Summary Ranges
// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

const summaryRanges = (arr) => {
  let [i, j] = [0, 1];
  const intervals = [];
  let tempInt = [];

  while (j < arr.length + 1) {
    if (arr[j] - arr[i] === 1) {
      tempInt.push(arr[i]);
    } else {
      tempInt.push(arr[i]);
      intervals.push(tempInt);
      tempInt = [];
    }

    i++;
    j++;
  }

  return intervals.map((int) =>
    int.length > 1 ? `${int[0]}->${int[int.length - 1]}` : int[0] + ''
  );
};
