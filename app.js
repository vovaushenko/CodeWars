const solution = (num) => {
  let array = Array.from({ length: num }, (_, id) => id);
  let A = array.filter((a) => a % 3 === 0 && a % 5 !== 0).length;
  let B = array.filter((a) => a % 3 !== 0 && a % 5 === 0).length;
  let C = array.filter((a) => a % 3 === 0 && a % 5 === 0 && a !== 0).length;
  return [A, B, C];
};