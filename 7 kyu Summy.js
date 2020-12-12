// https://www.codewars.com/kata/599c20626bd8795ce900001d/train/javascript

const summy = (stringOfInts) => stringOfInts.split(' ').reduce((a, b) => a + parseInt(b), 0);
