const zeros = (n) => {
  counter = 0;
  primeFactor = 5;
  while (n / primeFactor >= 1) {
    counter += Math.floor(n / primeFactor);
    primeFactor *= 5;
  }

  return counter;
};

zeros(12);
