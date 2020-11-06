// https://www.codewars.com/kata/580a4734d6df748060000045

const isSortedAndHow = (arr) => {
  let ascending = [...arr].sort((a, b) => a - b);
  let descending = [...arr].sort((a, b) => b - a);

  console.log(ascending);
  console.log(descending);
  let isAscending = true;
  let isDescending = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ascending[i]) {
      isAscending = false;
    } else if (arr[i] !== descending[i]) {
      isDescending = false;
    }
  }
  if (isAscending === false && isDescending === false) {
    return 'no';
  }

  return isAscending ? 'yes, ascending' : 'yes, descending';
};
