// https://www.codewars.com/kata/513fa1d75e4297ba38000003

function flatten(...arr) {
  let solution = [];

  function helper(a) {
    if (a.length === 0) {
      return;
    }
    if (typeof a[0] === 'object' && a[0] !== null) {
      helper(a[0]);
    } else {
      solution.push(a[0]);
    }

    helper(a.slice(1));
  }

  helper(arr);
  return solution;
}
