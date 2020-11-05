// //https://www.codewars.com/kata/57f36495c0bb25ecf50000e7

const findSum = (num) => {
  //Lets do this recursively
  let sum = 0;

  //will call recursive funciton that will be incrementing numbers from 3 up to num
  //then numbers that are %3 === 0 and %5 === 0 will be added to sum

  const sumCounter = (n) => {
    if (n === num + 1) {
      return;
    }
    n % 3 === 0 || n % 5 === 0 ? (sum += n) : (sum += 0);
    sumCounter(n + 1);
  };

  sumCounter(3);
  return sum;
};
