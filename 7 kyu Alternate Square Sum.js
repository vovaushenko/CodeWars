// https://www.codewars.com/kata/559d7951ce5e0da654000073

const alternateSqSum = (arr) => {
  let evenIds = arr.filter((el, id) => id % 2 === 0);
  let oddIds = arr.filter((el, id) => id % 2 !== 0);
  return (
    evenIds.reduce((total, num) => total + num, 0) +
    oddIds.reduce((total, num) => total + num ** 2, 0)
  );
};