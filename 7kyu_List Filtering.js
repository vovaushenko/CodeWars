// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(arr) {
  let filtered = [];
  for (let el of arr) {
    if (typeof el === "number") {
      filtered.push(el);
    }
  }
  return filtered;
}
