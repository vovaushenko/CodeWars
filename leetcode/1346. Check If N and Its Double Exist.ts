// 1346. Check If N and Its Double Exist

// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

const checkIfExist = (arr: number[]): boolean => {
  const map: { [key: string]: boolean } = {};

  for (let num of arr) {
    map[num] = true;
    if (map[num * 2] || map[num / 2]) return true;
  }

  return false;
};
