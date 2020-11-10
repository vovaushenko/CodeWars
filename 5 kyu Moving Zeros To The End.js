// https://www.codewars.com/kata/52597aa56021e91c93000cb0

const moveZeros = (arr) => {
  let result = [];
  let counterOfZeros = 0;
  //lets count number of zeros and create an array without zeros
  let helper = (a) => {
    if (a.length === 0) {
      return;
    }

    a[0] === 0 ? counterOfZeros++ : result.push(a[0]);
    helper(a.slice(1));
  };
  helper(arr);
  //lest add zeros at the end of this erray (number of zeros = counterOfZeros)
  for (let i = 0; i < counterOfZeros; i++) {
    result.push(0);
  }
  return result;
};
