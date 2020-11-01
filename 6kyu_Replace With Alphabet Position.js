// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let solution = '';

  for (let char of str) {
    char = char.toLowerCase();
    if (alphabet.indexOf(char) !== -1) {
      console.log(char);
      solution += alphabet.indexOf(char) + 1 + ' ';
    }
  }
  return solution.trim();
}
