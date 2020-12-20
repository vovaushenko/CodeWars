// https://www.codewars.com/kata/581bb3c1c221fb8e790001ef

const selectSubarray = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let subSum = arr.reduce((total, num, id) => (id !== i ? total + num : total + 0), 0);
    let subProduct = arr.reduce((total, num, id) => (id !== i ? total * num : total * 1), 1);
    let q = Math.abs(subProduct / subSum);
    res.push(q);
  }
  console.log(res);
  let smallest = Math.min(...res);
  let smallestId = res.indexOf(smallest);

  return [smallestId, arr[smallestId]];
};