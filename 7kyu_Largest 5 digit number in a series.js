// https://www.codewars.com/kata/586f6741c66d18c22800010a

function solution(digits) {
  let maxConsecutive = 0;
  for (let i = 0; i < digits.length - 4; i++) {
    let fiveDigit = "";
    fiveDigit += digits[i];
    for (let j = i + 1; j < i + 5; j++) {
      fiveDigit += digits[j];
    }

    if (Number(fiveDigit) > maxConsecutive) {
      maxConsecutive = Number(fiveDigit);
    }
  }
  return maxConsecutive;
}
