// 443. String Compression
// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

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
