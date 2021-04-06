// https://www.codewars.com/kata/57475353facb0e7431000651

const hotSingles = (arr1, arr2) => [
  ...new Set([
    ...arr1.filter((num) => !arr2.includes(num)),
    ...arr2.filter((num) => !arr1.includes(num)),
  ]),
];
