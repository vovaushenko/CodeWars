// 1331. Rank Transform of an Array
// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

const arrayRankTransform = (arr: number[]): number[] => {
  const hashMap: { [key: string]: number } = {};
  for (let num of arr) {
    hashMap[num] ? hashMap[num]++ : (hashMap[num] = 1);
  }
  console.log(hashMap);
  let counter = 1;
  const sortedKeys = Object.keys(hashMap).sort((a, b) => +a - +b);
  for (let key of sortedKeys) {
    hashMap[key] = counter;
    counter++;
  }

  const result = arr.map((num) => hashMap[num]);

  return result;
};
