// https://www.codewars.com/kata/591120432e6009420b00002d

// const twoArraysNthElement = (a1, a2, n) => {
//   if (a1[0] > a2[0]) {
//     let temp = a1;
//     a1 = a2;
//     a2 = temp;
//   }
//   let merge = [];
//   let i = 0;
//   let j = 0;
//   while (merge.length !== n + 1 && a1[i] && a2[j]) {
//     if (a1[i] < a2[j]) {
//       merge.push(a1[i]);
//       i++;
//     } else {
//       merge.push(a2[j]);
//       j++;
//     }
//   }
//   console.log(merge);
//   if (merge.length === n + 1) {
//     return merge[merge.length - 1];
//   } else {
//     while (merge.length !== n + 1) {
//       merge.push(a1[i]);
//       i++;
//     }
//     while (merge.length !== n + 1) {
//       merge.push(a2[j]);
//       j++;
//     }
//   }
// };

const twoArraysNthElement = (a1, a2, n) => {
  if (a1.length == 0) return a2[n];
  if (a2.length == 0) return a1[n];
  if (a1[0] > a2[0]) {
    let temp = a1;
    a1 = a2;
    a2 = temp;
  }
  let merge = [];
  let i = 0;
  let j = 0;
  while (merge.length !== n + 1) {
    if (a1[i] < a2[j]) {
      merge.push(a1[i]);
      i++;
    } else {
      merge.push(a2[j]);
      j++;
    }
  }
  
  return merge[merge.length - 1];
};

console.log(twoArraysNthElement([10000, 10002, 10004], [], 0));
