// https://www.codewars.com/kata/541da001259d9ca85d000688

const seqlist = (first, c, l) => Array.from({ length: l }, (_, id) => first + id * c);

console.log(seqlist(0, 1, 20));
