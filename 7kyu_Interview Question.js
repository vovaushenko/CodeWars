//https://www.codewars.com/kata/5b358a1e228d316283001892

function getStrings(city) {
  //lets create an object of frequencies
  let newCity = city.replace(/ /g, '');

  let frObj = {};

  for (let letter of newCity.toLowerCase()) {
    frObj[letter] ? frObj[letter]++ : (frObj[letter] = 1);
  }

  let output = '';

  for (let key in frObj) {
    output += `${key}:`;
    for (let i = 1; i <= frObj[key]; i++) {
      output += '*';
    }
    output += ',';
  }

  return output.slice(0, -1);
}
