// https://www.codewars.com/kata/5959ec605595565f5c00002b

const reverseBits = (n) => parseInt([...n.toString(2)].reverse().join(''), 2);

console.log(reverseBits(6090250174530944));
