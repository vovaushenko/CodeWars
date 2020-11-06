// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

const flattenAndSort = (arr) => {
  let flattenedArr = [];
  //will fisrtle flatten recursively
  let flatten = (a) => {
    if (a.length === 0) {
      return;
    }

    if (typeof a[0] === "object" && a[0] !== null) {
      flatten(a[0]);
    } else {
      flattenedArr.push(a[0]);
    }

    flatten(a.slice(1));
  };
  flatten(arr);
  // and then sort
  return flattenedArr.sort((a, b) => a - b);
};
