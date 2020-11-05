// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(arr) {
  const swap = (a, id1, id2) => {
    [a[id1], a[id2]] = [a[id2], a[id1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let smallest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (
        arr[j] < arr[smallest] &&
        arr[j] % 2 !== 0 &&
        arr[smallest] % 2 !== 0
      ) {
        smallest = j;
      }
    }
    if (i !== smallest) {
      swap(arr, i, smallest);
    }
  }
  return arr;
}
