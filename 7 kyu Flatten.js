// https://www.codewars.com/kata/5250a89b1625e5decd000413

const flatten = (arr) => {
  let result = [];
  for (let el of arr) {
    if (typeof el === "object") {
      for (content of el) {
        result.push(content);
      }
    } else {
      result.push(el);
    }
  }
  return result;
};
