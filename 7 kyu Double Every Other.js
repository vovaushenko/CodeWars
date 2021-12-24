/*
7 kyu
Double Every Other
*/

const doubleEveryOther = (arr) => arr.map((n, id) => (id % 2 ? n * 2 : n));
