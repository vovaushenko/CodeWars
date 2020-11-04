// https://www.codewars.com/kata/57cc79ec484cf991c900018d
const dbSort = (a) => {
  let strs = [];
  let nums = [];
  a.forEach((el) => (typeof el === "string" ? strs.push(el) : nums.push(el)));
  // Let's use merge sort to sort nums -> to improve time complexity :)

  //Merge sort
  let merge = (arr1, arr2) => {
    let res = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        res.push(arr1[i]);
        i++;
      } else {
        res.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      res.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      res.push(arr2[j]);
      j++;
    }
    return res;
  };

  let mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
  };

  //Finally we can use merge to sort our numbers :)
  const sortedNums = mergeSort(nums);
  //lets sort our strings
  const sortedStrs = strs.sort();
  //Lets combine sorted arrays
  const result = sortedNums.concat(sortedStrs);
  return result;
};
