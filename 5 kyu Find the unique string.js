// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

const findUniq = (arr) => {
  const maps = [];
  for (let el of arr) {
    let map = {};

    for (let char of el) {
      map[char.toLowerCase()]
        ? map[char.toLowerCase()]++
        : (map[char.toLowerCase()] = 1);
    }

    maps.push(map);
  }
  console.log(maps);

  let unique = maps[0];
  let sol = "";

  for (let i = 1; i < maps.length; i++) {
    for (let key in maps[i]) {
      if (!(key in unique)) {
        sol += key;
      }
    }
  }

  for (let el of arr) {
    if (el.indexOf(sol) !== -1) {
      return el;
    }
  }
};
