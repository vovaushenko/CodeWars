// https://www.codewars.com/kata/583ebb9328a0c034490001ba
const duplicateElements = (arr1, arr2) => arr1.filter((num) => arr2.includes(num)).length > 0;

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]));
