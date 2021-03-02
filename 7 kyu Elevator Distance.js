// https://www.codewars.com/kata/59f061773e532d0c87000d16

const elevatorDistance = (floors) => {
  let i = 0;
  let j = 1;
  let distance = 0;
  while (j < floors.length) {
    distance += Math.abs(floors[i] - floors[j]);
    i++;
    j++;
  }

  return distance;
};
