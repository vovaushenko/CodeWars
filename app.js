// https://www.codewars.com/kata/57e8fba2f11c647abc000944

const fireFight = (str) => str.replace(new RegExp('Fire', 'g'), '~~');

console.log(fireFight('Mast FireDeck Engine Water Fire'));
