// https://www.codewars.com/kata/56bf3287b5106eb10f000899

const moveVowel = (input) =>
  [...input].filter((char) => !'aeiou'.includes(char)).join('') +
  [...input].filter((char) => 'aeiou'.includes(char)).join('');
