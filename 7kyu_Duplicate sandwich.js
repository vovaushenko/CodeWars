// https://www.codewars.com/kata/5f8a15c06dbd530016be0c19

function duplicateSandwich(a) {
  //firstly case of a 2 elment array;
  if (a.length === 2 && a[0] === a[1]) {
    return [];
  }
  //case of an array length > 2; lets find indexes of equal values and store them in loc1 loc2
  let loc1;
  let loc2;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        loc1 = i + 1;
        loc2 = j;
      }
    }
  }
  //result for array of numbers
  let result = a.slice(loc1, loc2);

  return result;
}
