// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  let vowels = "aeiouAEIOU";
  let antiTroll = "";
  console.log(vowels.indexOf(str[1]));
  for (let char of str) {
    if (vowels.indexOf(char) === -1) {
      antiTroll += char;
    }
  }
  return antiTroll;
}
