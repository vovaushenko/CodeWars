const compress = (chars: any): number => {
  if (!chars.length) return 0;
  if (chars.length === 1) return 1;

  const length = chars.length - 1;

  let count = 0;
  let tempChar;
  let counter = 1;
  while (count < length + 1) {
    let char = chars.shift();
    if (tempChar === char) counter++;

    if (tempChar !== char && tempChar) {
      chars.push(tempChar);
      if (counter >= 2) {
        for (let digit of [...(counter + '')]) chars.push(digit);
      }
      counter = 1;
    }
    if (count === length) {
      chars.push(char);
      if (counter >= 2) {
        for (let digit of [...(counter + '')]) chars.push(digit);
      }
    }
    tempChar = char;

    count++;
  }
  console.log(chars);
  return chars.length;
};

console.log(compress(['a', 'b', 'c']));
