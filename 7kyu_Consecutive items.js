// https://www.codewars.com/kata/5f6d533e1475f30001e47514

function consecutive(arr, a, b) {
  //find index of a
  let indexOfA = arr.indexOf(a);

  if (arr[indexOfA + 1] === b || arr[indexOfA - 1] === b) {
    return true;
  }
  return false;
}
