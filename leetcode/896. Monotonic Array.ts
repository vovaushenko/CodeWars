// 896. Monotonic Array
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.

const isMonotonic = (arr: number[]): boolean => {
  let ascending = false;
  let descending = false;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] - arr[j] > 0) descending = true;
    if (arr[i] - arr[j] < 0) ascending = true;

    if (ascending && descending) return false;
    i++;
    j++;
  }

  return true;
};
