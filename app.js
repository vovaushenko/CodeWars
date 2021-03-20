const compose = (...functions) => (val) => functions.reduceRight((acc, f) => f(acc), val);

const multiplyByTwo = (a) => a * 2;
const plusOne = (a) => a + 1;

console.log(compose(multiplyByTwo, multiplyByTwo, multiplyByTwo, plusOne)(2));
