// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  const vowels = 'aeiou';
  let vowelsCounter = 0;

  for (let i = 0; i < str.length; i++) {
    if (!(vowels.indexOf(str[i]) == -1)) {
      vowelsCounter++;
    }
  }
  return vowelsCounter;
}

getCount('Halo');
