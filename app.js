// https://www.codewars.com/kata/5558cc216a7a231ac9000022

const duplicates = (arr) => {
  let unique = [];
  let duplicate = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    } else {
      if (!duplicate.includes(num)) {
        duplicate.push(num);
      }
    }
  }
  return duplicate;
};

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']));
