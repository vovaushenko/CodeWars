// https://www.codewars.com/kata/58ae6ae22c3aaafc58000079

function permuteAPalindrome(input) {
  //lets create objects of char frequencies

  let charFrequencies = {};
  let arrayOfFrequencies = [];

  for (char of input.toLowerCase()) {
    charFrequencies[char]
      ? charFrequencies[char]++
      : (charFrequencies[char] = 1);
  }

  for (key in charFrequencies) {
    arrayOfFrequencies.push(charFrequencies[key]);
  }

  //the case of 1 letter or empty string
  if (arrayOfFrequencies.length === 0 || arrayOfFrequencies.length === 1) {
    return true;
  }

  //lets sort our array of frequencies
  arrayOfFrequencies = arrayOfFrequencies.sort((a, b) => a - b);

  //if we have at least to frequencies of 1 (means two single and different chars ) -> this is not a palindrome
  if (arrayOfFrequencies[0] === 1 && arrayOfFrequencies[1] === 1) {
    return false;
  }
  console.log(charFrequencies);
  console.log(arrayOfFrequencies);

  //lets count number of odds
  let numberOfOdds = 0;
  for (let i = 0; i < arrayOfFrequencies.length; i++) {
    if (arrayOfFrequencies[i] % 2 != 0) {
      numberOfOdds++;
    }
  }

  if (numberOfOdds > 1) {
    return false;
  }
  console.log(numberOfOdds);

  return true;
}
