// https://www.codewars.com/kata/5592e3bd57b64d00f3000047

const findNb = (volume) => {
  let numberOfBlocks = 0;
  let counter = 1;
  let canBeDone = false;

  const helper = (vol) => {
    if (vol <= 0) {
      if (vol == 0) canBeDone = true;
      return;
    }
    vol = vol - counter ** 3;
    counter++;
    numberOfBlocks++;
    helper(vol);
  };

  helper(volume);
  return canBeDone ? numberOfBlocks : -1;
};