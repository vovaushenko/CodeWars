// https://www.codewars.com/kata/54dc6f5a224c26032800005c

const sumOfQuantities = (array, firstLetter) => {
  let sum = array
    .filter((a) => a[0] === firstLetter)
    .map((el) => parseInt(el.replace(/\D+/g, '')))
    .reduce((quantityOfBooks, book) => quantityOfBooks + book, 0);
  return sum;
};
const stockList = (listOfArt, listOfCat) => {
  if (listOfArt.length == 0 || listOfCat.length == 0) return '';
  let total = [];
  for (let category of listOfCat) {
    total.push(`(${category} : ${sumOfQuantities(listOfArt, category)})`);
  }
  return total.join(' - ');
};
