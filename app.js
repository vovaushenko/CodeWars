// https://www.codewars.com/kata/56541980fa08ab47a0000040

 const printerError = (s) => `${s.length - s.replace(/[^a-m]+/g, '').length}/${s.length}`;

let s = 'aaaxbbbbyyhwawiwjjjwwm';

let z = s.replace(/[^a-m]+/g, '');
console.log(s.length, z.length, s.length - z.length);
