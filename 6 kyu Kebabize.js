// https://www.codewars.com/kata/57f8ff867a28db569e000c4a

const kebabize = (str) => {
  console.log(str);
  let kebab = '';
  // weed out numbers
  let withoutNumbers = '';
  for (char of str) {
    if (!Number(char) && char !== '0') {
      withoutNumbers += char;
    }
  }
  console.log(withoutNumbers);
  //then recursively transform into kebab case
  let kebabMaker = (s) => {
    if (s.length === 0) {
      return;
    }

    if (s[0].toUpperCase() === s[0]) {
      kebab += '-' + s[0].toLowerCase();
    } else {
      kebab += s[0];
    }
    kebabMaker(s.substring(1));
  };
  kebabMaker(withoutNumbers);

  return kebab[0] === '-' ? kebab.substr(1) : kebab;
};
