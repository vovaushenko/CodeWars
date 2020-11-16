// https://www.codewars.com/kata/54592a5052756d5c5d0009c3

const head = (arr) => arr[0];

const tail = (arr) => arr.filter((num, id) => id > 0);

const last = (arr) => arr[arr.length - 1];

const init = (arr) => arr.filter((num, id) => id != arr.length - 1);
