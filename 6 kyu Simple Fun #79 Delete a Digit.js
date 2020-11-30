// https://www.codewars.com/kata/5894318275f2c75695000146

const deleteDigit = (num) => {
  let arr = [...(num + '')];
  let biggestNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr
      .filter((a, id) => {
        if (id !== i) {
          return a;
        }
      })
      .join('');
    biggestNumber = Math.max(biggestNumber, temp);
  }
  return biggestNumber;
};