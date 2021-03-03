// 796. Rotate String

const rotateString = (a: string, b: string): boolean => {
  //if strings are equal -> apparently true
  if (a === b) return true;

  //spread "a" string into array of chars
  const chars: any = [...a];
  //counter to track the number of rotations
  let counter = 0;
  //rotate until we'll reach the max limit === the length of the string
  let fistChar;
  while (counter < a.length) {
    //in order to rotate we will shift first character from the array of chars
    let firstChar = chars.shift();
    //then push it to the end
    chars.push(firstChar);
    //increment counter
    counter++;
    //check if current rotation is equal to string "b"
    if (chars.join('') === b) return true;
  }
  //if we reached this point, means string "a" cannot be rotated into "b"
  return false;
};
