// https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9

const sortme = (arr) => {
  const swap = (a, id1, id2) => {
    [a[id1], a[id2]] = [a[id2], a[id1]];
  };


  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j< i -1; j++) {
      if(arr[j].toLowerCase() > arr[j+1].toLowerCase()) {
        swap(arr, j, j+1)
      }
    }
  }
  return arr;
};