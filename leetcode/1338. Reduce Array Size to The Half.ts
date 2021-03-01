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
