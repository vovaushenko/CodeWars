// https://www.codewars.com/kata/59dc8288fc3c49cc3f000039

const sort = (initialArray, sortingArray) => {
  let sorted = [];

  for (let i = 0; i < initialArray.length; i++) {
    sorted[sortingArray[i]] = initialArray[i];
  }

  return sorted;
};
