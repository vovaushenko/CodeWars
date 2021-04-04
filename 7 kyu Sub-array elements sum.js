const elementsSum = (arr, d = 0) =>
  arr
    .map((subarr, id) =>
      subarr[arr.length - id - 1] !== undefined ? subarr[arr.length - id - 1] : d
    )
    .reduce((a, b) => a + b, 0);
