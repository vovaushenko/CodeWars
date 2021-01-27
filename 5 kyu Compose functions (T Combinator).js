// https://www.codewars.com/kata/51f9d3db4095e07f130001ee

const compose = (val, ...functions) => functions.reduce((res, nextFunc) => nextFunc(res), val);
