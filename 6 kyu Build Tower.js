// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

const towerBuilder = (floors) => {
  const lengthOfFloor = 2 * floors - 1;
  let tower = [];
  for (let i = 0; i < floors; i++) {
    tower.push(makeFloor(lengthOfFloor, i));
  }
  return tower.reverse();
};

function makeFloor(length, iteration) {
  let floor = Array.from({ length }, () => '*');
  let start = 0;
  let end = floor.length - 1;
  let counter = 0;
  while (start < end) {
    if (counter === iteration) break;
    floor[start] = ' ';
    floor[end] = ' ';
    counter++;
    start++;
    end--;
  }

  return floor.join('');
}