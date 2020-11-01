// https://www.codewars.com/kata/59670a7591dae8b6900000e4

function oddNum(arr) {
  let counter = 0;

  function searchForOdd(array) {
    if (array[0] % 2 !== 0) {
      return;
    }
    counter++;
    searchForOdd(array.slice(1));
  }

  searchForOdd(arr);
  // return counter === arr.length && arr[length - 1] % 2 !== 0 ? -1 : counter;

  if (counter === arr.length && arr[length - 1] % 2 !== 0) {
    return -1;
  } else {
    return counter;
  }
}

console.log(oddNum([2, 2, 2, 2, 2, 4]));
