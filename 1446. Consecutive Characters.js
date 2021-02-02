// 1446. Consecutive Characters
// Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

const maxPower = (str) => {
  let i = 0;
  let j = 1;
  let power = 1;
  let tempPower = 1;
  while (j < str.length) {
    if (str[i] === str[j]) {
      tempPower++;
    } else {
      tempPower = 1;
    }

    power = Math.max(power, tempPower);
    i++;
    j++;
  }

  return power;
};
