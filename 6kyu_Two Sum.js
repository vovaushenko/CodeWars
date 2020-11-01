// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(n, target) {
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (n[j] + n[i] === target) {
        return [i, j];
      }
    }
  }
}
