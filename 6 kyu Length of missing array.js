// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

const getLengthOfMissingArray = (arrOfArr) => {
  if (
    arrOfArr === null ||
    arrOfArr.length === 0 ||
    arrOfArr.includes(null) === true
  ) {
    return 0;
  }
  let arrOfLengths = [];
  for (let arr of arrOfArr) {
    arrOfLengths.push(arr.length);
  }
  arrOfLengths.sort((a, b) => a - b);
  if (arrOfLengths[0] === 0) {
    return 0;
  }

  for (let i = 0; i < arrOfLengths.length; i++) {
    if (arrOfLengths[i + 1] - arrOfLengths[i] === 2) {
      return arrOfLengths[i] + 1;
    }
  }
};
