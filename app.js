// https://www.codewars.com/kata/58356a94f8358058f30004b5

const flyBy = (lamps, drone) =>
  'o'.repeat(drone.length < lamps.length ? drone.length : lamps.length) + lamps.slice(drone.length);

console.log(flyBy('xxxxxx', '=====T'));
