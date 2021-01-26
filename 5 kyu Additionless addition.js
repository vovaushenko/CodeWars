// https://www.codewars.com/kata/536ce83e2f403659a5000d47

const add = (a, b) => (b ? add(a ^ b, (a & b) << 1) : a);
