//www.codewars.com/kata/55908aad6620c066bc00002a

https: function XO(str) {
  //Lets create objects of frequencies
  let objOfFrequencies = {};
  for (let char of str) {
    objOfFrequencies[char.toLowerCase()]
      ? objOfFrequencies[char.toLowerCase()]++
      : (objOfFrequencies[char.toLowerCase()] = 1);
  }

  for (let key in objOfFrequencies) {
    if (objOfFrequencies['o'] !== objOfFrequencies['x']) {
      return false;
    }
  }
  return true;
}
