// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

const zeros = (n) => {
  counter = 0;
  primeFactor = 5;
  while (n / primeFactor >= 1) {
    counter += Math.floor(n / primeFactor);
    primeFactor *= 5;
  }

  return counter;
};
