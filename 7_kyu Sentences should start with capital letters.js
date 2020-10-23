// https://www.codewars.com/kata/5bf774a81505a7413400006a

function fix(paragraph) {
  if (paragraph === '') {
    return '';
  }
  let arr = paragraph.split('. ');

  let newStr = '';
  for (let i = 0; i < arr.length; i++) {
    newStr += `${arr[i][0].toUpperCase()}${arr[i].slice(1)}. `;
  }
  let solution = newStr.slice(0, -2);
  return solution;
}
