// https://www.codewars.com/kata/58f8b35fda19c0c79400020f

function allNonConsecutive(arr) {
  j = 1;
  let solution = [];
  let obj = {};
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[j] - arr[i] !== 1) {
      solution.push({ i: j, n: arr[j] });
    }

    j++;
  }

  return solution;
}
