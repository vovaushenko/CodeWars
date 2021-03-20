// https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/solutions/javascript

const compose = (...functions) => (val) => functions.reduceRight((acc, f) => f(acc), val);
