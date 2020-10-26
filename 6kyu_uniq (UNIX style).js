// https://www.codewars.com/kata/52249faee9abb9cefa0001ee

function uniq(a) {
  if (a.length === 0) {
    return [];
  }

  let j = 0;
  let sol = [];
  sol.push(a[0]);
  for (let i = 1; i < a.length; i++) {
    if (a[j] === a[i]) {
      j++;
    }
    if (a[j] !== a[i]) {
      j++;
      sol.push(a[j]);
    }
  }
  return sol;
}
