// https://www.codewars.com/kata/5809b62808ad92e31b000031

const calculate = (s) => String(eval(s.replace(/(plus)/gi, '+').replace(/(minus)/gi, '-')));

console.log(calculate('1plus2plus3minus4'));
