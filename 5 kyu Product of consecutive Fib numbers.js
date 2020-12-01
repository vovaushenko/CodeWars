// https://www.codewars.com/kata/5541f58a944b85ce6d00006a

const productFib = (prod) => {
  let fibs = [0, 1];
  let i = 0,
    j = 1;
  currentProduct = 1;
  while (currentProduct < prod) {
    fibs.push(fibs[i] + fibs[j]);
    i++;
    j++;
    currentProduct = fibs[i] * fibs[j];
  }

  let closestTwo = fibs.slice(fibs.length - 2);

  closestTwo[0] * closestTwo[1] === prod
    ? closestTwo.push(true)
    : closestTwo.push(false);

  return closestTwo;
};