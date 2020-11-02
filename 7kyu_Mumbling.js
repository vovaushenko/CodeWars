// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (j === 0) {
        result += str[i].toUpperCase();
      } else {
        result += str[i].toLowerCase();
      }
      if (j === i && i !== str.length - 1) {
        result += "-";
      }
    }
  }

  return result;
}
