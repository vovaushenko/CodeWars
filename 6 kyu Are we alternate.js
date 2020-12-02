const isVowel = (char) => 'aeiou'.includes(char);
const isConsonant = (char) => !'aeiou'.includes(char);

const isAlt = (str) => {
  if (str.length === 1) return true;
  
  for (let i = 0; i < str.length - 1; i++) {
    if (
      (isVowel(str[i]) && isVowel(str[i + 1])) ||
      (isConsonant(str[i]) && isConsonant(str[i + 1]))
    ) {
      return false;
    }
  }
  return true;
};