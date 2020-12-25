// https://www.codewars.com/kata/5f0ed36164f2bc00283aed07

const overTheRoad = (address, n) => {
  const oddHouses = genereateOddOrEvenNums(n, 'odd');
  const evenHouses = genereateOddOrEvenNums(n, 'even');
  return address % 2 == 0
    ? oddHouses[evenHouses.indexOf(address)]
    : evenHouses[oddHouses.indexOf(address)];
};

function genereateOddOrEvenNums(length, flag) {
  if (flag === 'odd') {
    let odds = [];
    let num = 1;
    while (odds.length < length) {
      odds.push(num);
      num += 2;
    }
    return odds;
  } else if (flag === 'even') {
    let evens = [];
    let num = 2;
    while (evens.length < length) {
      evens.push(num);
      num += 2;
    }
    return evens.reverse();
  }
}
