// 1207. Unique Number of Occurrences
// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

interface HashMap {
  [key: string]: number;
}

const uniqueOccurrences = (arr: number[]): boolean => {
  const map: HashMap = {};

  for (let num of arr) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  const frequencies = Object.values(map);

  return frequencies.length === [...new Set(frequencies)].length;
};
