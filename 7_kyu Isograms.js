// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
  //Lets create objects of frequencies
  let objOfFrequencies = {};
  for (let char of str) {
    objOfFrequencies[char.toLowerCase()]
      ? objOfFrequencies[char.toLowerCase()]++
      : (objOfFrequencies[char.toLowerCase()] = 1);
  }

  //lets check whether there are frequencies more than 2 . If yes -> false
  for (let key in objOfFrequencies) {
    if (objOfFrequencies[key] > 1) {
      return false;
    }
  }

  return true;
}
