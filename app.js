const nthUglyNumber = (n) => {
  debugger;
  let two = 2;
  let three = 3;
  let five = 5;
  let i = 1,
    j = 1,
    k = 1;
  let uglyNumbers = [1];
  let min;

  while (uglyNumbers.length < n) {
    let tempTwo = two * i;
    let tempThree = three * j;
    let tempFive = five * k;

    min = Math.min(tempTwo, tempThree, tempFive);
    uglyNumbers.push(min);

    if (min === tempTwo) i++;
    if (min === tempThree) j++;
    if (min === tempFive) k++;
  }

  return uglyNumbers[uglyNumbers.length - 1];
};

console.log(nthUglyNumber(12));
