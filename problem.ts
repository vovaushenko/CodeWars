// 1338. Reduce Array Size to The Half

function minSetSize(arr: number[]): number {
  const map: { [key: string]: number } = {};

  for (let num of arr) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  const frequencies = Object.values(map).sort((a, b) => b - a);
  console.log(frequencies);

  let removed = 0;
  let target = arr.length / 2;

  let i = 0;

  while (removed < target) {
    removed += frequencies[i++];
  }

  return i;
}

// function minSetSize(arr: number[]): number {
//   // counts of different numbers in arr
//   const counts: Map<number, number> = new Map();
//   // fill counts
//   for (let i = 0; i < arr.length; i++) {
//     // fill counts + 1 if exits, 1 if doesn't
//     counts.set(arr[i], counts.has(arr[i]) ? counts.get(arr[i])! + 1 : 1);
//   }
//   // get entries in counts
//   const entries = Array.from(counts.entries());
//   // sort by frequencies (value in key:value) DESCENDING
//   entries.sort((a, b) => b[1] - a[1]);
//   console.log(entries);
//   // amount removed
//   let removed = 0;
//   // amount that needs to be removed (at least half)
//   let target = arr.length / 2;
//   // pointer for entries
//   let i = 0;
//   // keep going until we've removed at least half
//   while (removed < target) {
//     // remove this number from array (and add removed, increment i)
//     removed += entries[i++][1];
//   }
//   // i is the number of numbers we had to remove
//   return i;
// }

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
