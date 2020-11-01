// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

function maxSequence(arr) {
  let sol = [];
  let sum = 0;
  let tempMax = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sol.push(arr[i]);

    if (sum < 0) {
      sum = 0;
      sol = [];
    }
    if (sum > tempMax) {
      tempMax = sum;
    }
  }
  return tempMax;
}
