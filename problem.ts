// 386. Lexicographical Numbers
// Given an integer n, return 1 - n in lexicographical order.

// For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

// Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.

// generate array 1 to n  -> sort it lexographically 🙃
const lexicalOrder = (n: number): any => Array.from({ length: n }, (_, id) => id + 1).sort();

console.log(lexicalOrder(13));
