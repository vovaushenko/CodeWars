// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(str) {
  //firstly, lets find frequencies of letters
  let frequencies = {};
  let arrayOfSingles = [];
  for (char of str) {
    frequencies[char.toLowerCase()]
      ? frequencies[char.toLowerCase()]++
      : (frequencies[char.toLowerCase()] = 1);
  }
  console.log(frequencies);
  //look int object and find frequencies of 1
  for (key in frequencies) {
    if (frequencies[key] === 1) {
      arrayOfSingles.push(key);
    }
  }
  if (arrayOfSingles.length === 0) {
    return '';
  }

  return str.indexOf(arrayOfSingles[0]) === -1
    ? arrayOfSingles[0].toUpperCase()
    : arrayOfSingles[0];
}
console.log(firstNonRepeatingLetter('sssTre'));
