// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s) {
  const arr = s.split(' ');
  let wordLengths = [];
  for (let i = 0; i < arr.length; i++) {
    wordLengths.push(arr[i].length);
  }
  return Math.min(...wordLengths);
}
