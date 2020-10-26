function isItPossible(field) {
  //lets count the number of X's and O's and '_'s

  let frequencyCounter = {};
  if (field.length !== 9) return false;

  for (letter of field) {
    frequencyCounter[letter]
      ? frequencyCounter[letter]++
      : (frequencyCounter[letter] = 1);
  }

  //let's consequtively rule out impossible situations
  if (frequencyCounter[0] > 6 || frequencyCounter.X > 6) {
    return false;
  }
  if (frequencyCounter[0] === 1 && frequencyCounter._ === 8) {
    return false;
  }

  //check all winning combinations
  let victory = false;
  let victoryOfZero = false;
  if (field[0] === field[1] && field[1] === field[2] && field[0] != '_') {
    field[0] === '0' ? (victoryOfZero = true) : false;
    victory = true;
  } else if (
    field[3] === field[4] &&
    field[4] === field[5] &&
    field[3] != '_'
  ) {
    victory = true;
    field[3] === '0' ? (victoryOfZero = true) : false;
  } else if (
    field[6] === field[7] &&
    field[7] === field[8] &&
    field[6] != '_'
  ) {
    victory = true;
    field[6] === '0' ? (victoryOfZero = true) : false;
  } else if (
    field[0] === field[3] &&
    field[3] === field[6] &&
    field[0] != '_'
  ) {
    victory = true;
    field[0] === '0' ? (victoryOfZero = true) : false;
  } else if (
    field[1] === field[4] &&
    field[4] === field[7] &&
    field[1] != '_'
  ) {
    victory = true;
    field[1] === '0' ? (victoryOfZero = true) : false;
  } else if (
    field[2] === field[5] &&
    field[5] === field[8] &&
    field[2] != '_'
  ) {
    victory = true;
    field[2] === '0' ? (victoryOfZero = true) : false;
  } else if (
    field[0] === field[4] &&
    field[4] === field[8] &&
    field[0] != '_'
  ) {
    victory = true;
    field[0] === '0' ? (victoryOfZero = true) : false;
  } else if (
    field[2] === field[4] &&
    field[4] === field[6] &&
    field[2] != '_'
  ) {
    victory = true;
    field[2] === '0' ? (victoryOfZero = true) : false;
  }

  //if victory = true and frequency of Xs = 0s -> impossible
  if (victory === true && frequencyCounter[0] > frequencyCounter.X) {
    return false;
  }

  if (
    victory === true &&
    victoryOfZero === false &&
    frequencyCounter[0] === frequencyCounter.X
  ) {
    return false;
  }

  //if victory === false(game in process) frequency of X's < O's -> impossible
  if (victory === false && frequencyCounter[0] > frequencyCounter.X) {
    return false;
  }

  //if victory === true and 0's won but frequency of X' > 0'x -> impossible
  if (
    victory === true &&
    victoryOfZero === true &&
    frequencyCounter[0] < frequencyCounter.X
  ) {
    return false;
  }
  if (
    victory === false &&
    frequencyCounter[0] > 1 &&
    !('X' in frequencyCounter)
  ) {
    return false;
  }

  if (victory === false && frequencyCounter.X > 1 && !(0 in frequencyCounter)) {
    return false;
  }

  if (victoryOfZero === true && !('X' in frequencyCounter)) {
    return false;
  }
  if (victory === true && !(0 in frequencyCounter)) {
    return false;
  }

  if (
    victory === true &&
    victoryOfZero !== true &&
    frequencyCounter[0] === frequencyCounter.X
  ) {
    return false;
  }

  if (victory === true && frequencyCounter.X - frequencyCounter[0] > 2) {
    return false;
  }

  //check for equality before the last turn
  if (frequencyCounter._ === 1 && frequencyCounter.X !== frequencyCounter[0]) {
    return false;
  }

  if (frequencyCounter._ > 0 && frequencyCounter.X - frequencyCounter[0] > 1) {
    return false;
  }

  if (victory === true && frequencyCounter._ === 0) {
    return false;
  }
  return true;
}
