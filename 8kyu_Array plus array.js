// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

//done recursively

function arrayPlusArray(arr1, arr2) {
  /// Recursive Version \\\
  let sum1 = 0;

  function sumOfFirst(input) {
    if (input.length === 0) {
      return;
    }

    sum1 += input[0];
    sumOfFirst(input.slice(1));
  }
  sumOfFirst(arr1);

  let sum2 = 0;

  function sumOfSecond(input) {
    if (input.length === 0) {
      return;
    }

    sum2 += input[0];
    sumOfSecond(input.slice(1));
  }
  sumOfSecond(arr2);

  return sum1 + sum2;
}
