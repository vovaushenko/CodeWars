// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3



const cleanString = (str) => {
  let result = [];
  let hashCounter = 0;

  const logic = (s) => {
    if (s.length === 0) return;

    if (hashCounter === 0 && s[s.length - 1] !== '#') {
      result.push(s[s.length - 1]);
    }

    if (s[s.length - 1] === '#') {
      hashCounter++;
    } else {
      hashCounter--;
      if (hashCounter < 0) hashCounter = 0;
    }

    logic(s.slice(0, -1));
  };

  logic(str);

  return result.reverse().join('');
};