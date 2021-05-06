// 191. Number of 1 Bits

/*
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
*/

const hammingWeight = (n) => n.toString(2).replace(/0/g, '').length;
