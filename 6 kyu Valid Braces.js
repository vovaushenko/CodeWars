// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

const validBraces = (braces) => {
  const OPENING = '({[';

  let queue = [];
  let isValid = true;
  let hasClosing = false;
  let hasOpening = false;
  for (brace of braces) {
    if (OPENING.includes(brace)) {
      hasOpening = true;
      queue.push(brace);
    } else {
      hasClosing = true;
      let openingBrace = queue.pop(brace);
      if (openingBrace === '(' && brace !== ')') isValid = false;
      if (openingBrace === '{' && brace !== '}') isValid = false;
      if (openingBrace === '[' && brace !== ']') isValid = false;
      console.log(openingBrace, brace);
    }
  }

  return hasClosing && hasOpening ? isValid : false;
};
