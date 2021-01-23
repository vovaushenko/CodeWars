// 6 kyu
// Calculate number of inversions in array

const countInversions = (arr) => {
  let inversions = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) inversions++;
    }
  }

  return inversions;
};
