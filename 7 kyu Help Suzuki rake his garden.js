// https://www.codewars.com/kata/571c1e847beb0a8f8900153d

const solve = (garden) => {
  let arr = garden.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 'gravel' && arr[i] !== 'rock') {
      arr[i] = 'gravel';
    }
  }
  return arr.join(' ');
};
