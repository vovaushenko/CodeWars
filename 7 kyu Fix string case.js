//www.codewars.com/kata/5b180e9fedaa564a7000009a

https: const solve = (str) => {
  //lets firstly count number of lower and upper case chars
  let lowerCase = 0;
  let upperCase = 0;
  for (let char of str) {
    char.toUpperCase() === char ? upperCase++ : lowerCase++;
  }
  let solution = "";

  for (let char of str) {
    lowerCase >= upperCase
      ? (solution += char.toLowerCase())
      : (solution += char.toUpperCase());
  }
  return solution;
};
