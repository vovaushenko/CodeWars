// https://www.codewars.com/kata/5a2b7edcb6486a856e00005b

const checkVowel = (string, position) => isVowel(string[position]);

const isVowel = (char) => (char ? 'aeiou'.includes(char.toLowerCase()) : false);
