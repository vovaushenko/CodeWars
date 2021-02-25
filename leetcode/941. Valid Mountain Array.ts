// 941. Valid Mountain Array
// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

const validMountainArray = (arr: number[]): boolean => {
  if (arr.length === 1) return false;
  if (arr.length === 2 && arr[0] > arr[1]) return false;
  const maxNum = Math.max(...arr);
  const maxNumId = arr.indexOf(maxNum);
  if (arr[maxNumId + 1] === undefined || arr[maxNumId - 1] === undefined) return false;

  let i = maxNumId;
  let j = maxNumId + 1;
  while (j < arr.length) {
    if (arr[j] >= arr[i]) return false;
    i++;
    j++;
  }

  i = maxNumId - 1;
  j = maxNumId;
  while (j >= 0) {
    if (arr[j] <= arr[i]) return false;
    i--;
    j--;
  }

  return true;
};
