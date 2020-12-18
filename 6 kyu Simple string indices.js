// https://www.codewars.com/kata/5a24254fe1ce0ec2eb000078

const solve = (str, id) => {
  if (str[id] !== '(') {
    return -1;
  }
  let counter = 0;

  for (let i = id; i < str.length; i++) {
    if (str[i] === '(') counter++;
    if (str[i] === ')') counter--;

    if (counter == 0) {
      return i;
    }
  }
};
