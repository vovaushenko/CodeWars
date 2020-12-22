// https://www.codewars.com/kata/55c6126177c9441a570000cc

const orderWeight = (str) => {
  let arr = str.split(' ');
  console.log(arr);

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (numberWeigth(arr[j]) > numberWeigth(arr[j + 1])) {
        swap(arr, j, j + 1);
      }
      if (numberWeigth(arr[j]) === numberWeigth(arr[j + 1])) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  }
  return arr.join(' ');
};

function swap(arr, id1, id2) {
  return ([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);
}

function numberWeigth(num) {
  return [...(num + '')].reduce((weigth, digit) => weigth + Number(digit), 0);
}