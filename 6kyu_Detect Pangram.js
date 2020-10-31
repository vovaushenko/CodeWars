function isPangram(string) {
  if (string.length < 26) {
    return false;
  }
  //firstly we will set up object of frequencies
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let frequencies = {};
  let panagram = {};
  for (char of string) {
    frequencies[char.toLowerCase()]
      ? frequencies[char.toLowerCase()]++
      : (frequencies[char.toLowerCase()] = 1);
  }
  for (char of alphabet) {
    panagram[char.toLowerCase()]
      ? panagram[char.toLowerCase()]++
      : (panagram[char.toLowerCase()] = 1);
  }
  //compare frequencies of string with our ideal Pangarm = alphabet
  for (let key in panagram) {
    // if string lacks some letter of aplhabet -> false
    if (!(key in frequencies)) {
      return false;
    }
  }

  //otherwise it's a pangram
  return true;
}
