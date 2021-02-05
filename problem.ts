// selection sort

const swap = (a: number[], id1: number, id2: number): number[] =>
  ([a[id1], a[id2]] = [a[id2], a[id1]]);

const bubbleSort = (arr: number[]): number[] => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }

  return arr;
};

console.log(bubbleSort([9, 2, 3, 7, 6, 11, 1, 4, 2]));
