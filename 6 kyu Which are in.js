// https://www.codewars.com/kata/550554fd08b86f84fe000a58

const inArray = (a1, a2) => {
  let res = [];
  for (let word of a1) {
    for (let longerWord of a2) {
      if (longerWord.includes(word) && !res.includes(word)) res.push(word);
    }
  }
  return res.sort();
};
