// https://www.codewars.com/kata/586d6cefbcc21eed7a001155

function longestRepetition(s) {
  if (s === '') return ['', 0];

  //we'll be looping through string and record in var the count of repeats
  //pointers which will'be using to compare chars
  let pointer = 0;
  let pointerPlus = 1;

  //counters for temporary repeats and max repeats
  let tempCounter = 0;
  let maxCounter = 0;
  let letter;

  while (pointerPlus <= s.length - 1) {
    if (s[pointer] === s[pointerPlus]) {
      tempCounter++;
    } else if (s[pointer] !== s[pointerPlus]) {
      tempCounter = 0;
    }

    pointer++;
    pointerPlus++;

    if (tempCounter > maxCounter) {
      maxCounter = tempCounter;
      letter = s[pointer];
    }
    //if our max we have a sequence of similar letters => we take the 1st letter of string
    if (maxCounter === 0) {
      letter = s[0];
    }
  }
  return [letter, maxCounter + 1];
}
