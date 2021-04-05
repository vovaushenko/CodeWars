// https://www.codewars.com/kata/5a3ddf58e1ce0e6f8f000030

const thatUnitesUs = (a1, a2, n) => [...new Set([...a1, ...a2])].sort().slice(0, n);
