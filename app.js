// https://www.codewars.com/kata/5226eb40316b56c8d500030f

const pascalsTriangle = (n) => {
  if (n == 1) return [1];
  if (n == 2) return [1, 1, 1];
  if (n == 3) return [1, 1, 1, 1, 2, 1];
  const result = [[1], [1, 1], [1, 2, 1]];

  const helper = (arr) => {
    if (result.length === n) return;
    let newRow = [];
    for (let i = 0; i < arr.length + 1; i++) {
      if (i === 0) {
        newRow.push(arr[0]);
      } else if (i === arr.length) {
        newRow.push(arr[arr.length - 1]);
      } else {
        newRow.push(arr[i - 1] + arr[i]);
      }
    }
    result.push(newRow);
    helper(result[result.length - 1]);
  };

  helper(result[result.length - 1]);

  let finalResult = [].concat.apply([], result);
  return finalResult;
};

pascalsTriangle(1);

//              1
//             1 1
//            1 2 1
//          1 3  3 1
//         1 4 6  4 1
//        1 5 10 10 5 1
