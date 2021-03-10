// https://www.codewars.com/kata/5ab363ff6a176b29880000dd

const hexHash = (code) => [...code].map((char) => char.charCodeAt(0).toString(16));
console.log(hexHash('Hello, World!'));
