// https://www.codewars.com/kata/5aca48db188ab3558e0030fa
const equalize = (arr) => arr.map((num) => (num - arr[0] >= 0 ? `+${num - arr[0]}` : num - arr[0] + ''));
