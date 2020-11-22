// https://www.codewars.com/kata/54da539698b8a2ad76000228

const isValidWalk = (walk) => {
  if (walk.length !== 10) return false;
  let map = {};
  for (let direction of walk) {
    map[direction] ? map[direction]++ : (map[direction] = 1);
  }
  // lets compare similarity of steps in different directions
  if (map['n'] != map['s']) {
    return false;
  } else if (map['w'] != map['e']) {
    return false;
  }
  return true;
};