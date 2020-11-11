// https://www.codewars.com/kata/5a651865fd56cb55760000e0

const arrayLeaders = (arr) => {
  let arrayLeaders = [];
  for (let i = 0; i < arr.length; i++) {
    let rightSum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j];
    }
    console.log(rightSum);
    if (arr[i] > rightSum) {
      arrayLeaders.push(arr[i]);
    }
  }
  return arrayLeaders;
};
