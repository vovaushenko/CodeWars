//www.codewars.com/kata/56747fd5cb988479af000028

https: function getMiddle(s) {
  let middleInd = Math.floor(s.length / 2);

  console.log(middleInd);

  return s.length % 2 !== 0
    ? s.substring(middleInd, middleInd + 1)
    : s.substring(middleInd - 1, middleInd + 1);
}
