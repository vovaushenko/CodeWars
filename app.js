// https://www.codewars.com/kata/581dc1852d68e751180000c6

const TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney'];
const search = (searchTerm) => TITLES.filter((title) => title.includes(searchTerm));

console.log(search('ock'));
