// https://www.codewars.com/kata/552c028c030765286c00007d

function iqTest(numbers) {
  let arr = numbers.split(' ').map(Number);
  let counterOfEvens = 0;
  arr.forEach((num) => {
    if (num % 2 === 0) {
      counterOfEvens++;
    }
  });
  let majorityIsEven;
  counterOfEvens >= 2 ? (majorityIsEven = true) : (majorityIsEven = false);

  if (majorityIsEven) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        return i + 1;
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        return i + 1;
      }
    }
  }
}
