// https://www.codewars.com/kata/the-hashtag-generator

function generateHashtag(str) {
  if (str === '') {
    return false;
  }
  //check for whitespaces only
  if (/^\s+$/.test(str)) {
    return false;
  }
  let hashInit = '';
  let hashFinal = '#';

  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ' && str[i] !== ' ') {
      hashInit += str[i].toUpperCase();
    } else {
      hashInit += str[i];
    }
  }

  if (hashInit === undefined) {
    return false;
  }

  for (let j = 0; j < hashInit.length; j++) {
    if (hashInit[j] !== ' ') {
      hashFinal += hashInit[j];
    }
  }
  let lowerCase = '';
  if (hashFinal[1].toUpperCase() !== hashFinal[1]) {
    for (let k = 0; k < hashFinal.length; k++) {
      if (k === 1) {
        lowerCase += hashFinal[k].toUpperCase();
      } else {
        lowerCase += hashFinal[k];
      }
    }
    return lowerCase.length > 140 ? false : lowerCase;
  }

  return hashFinal.length > 140 ? false : hashFinal;
}
