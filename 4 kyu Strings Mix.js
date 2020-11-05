// https://www.codewars.com/kata/5629db57620258aa9d000014

const mix = (s1, s2) => {
  console.log(s1);
  console.log(s2);
  let map1 = {};
  let map2 = {};
  //we will firstly make maps of frequencies of lowerCase chars
  for (let char of s1) {
    if (char.toUpperCase() !== char) {
      map1[char] ? map1[char]++ : (map1[char] = 1);
    }
  }
  for (let char of s2) {
    if (char.toUpperCase() !== char) {
      map2[char] ? map2[char]++ : (map2[char] = 1);
    }
  }
  console.log(map1);
  console.log(map2);
  let sol = [];
  for (let key in map1) {
    let solution = '';
    if (key in map2 && map1[key] > map2[key]) {
      solution += '1:';
      for (let i = 0; i < map1[key]; i++) {
        solution += key;
      }

      sol.push(solution);
    } else if (key in map2 && map1[key] < map2[key]) {
      solution += '2:';
      for (let i = 0; i < map2[key]; i++) {
        solution += key;
      }

      sol.push(solution);
    } else if (key in map2 && map1[key] === map2[key] && map1[key] > 1) {
      solution += '=:';
      for (let i = 0; i < map2[key]; i++) {
        solution += key;
      }

      sol.push(solution);
    } else if (!(key in map2) && map1[key] > 1) {
      solution += '1:';
      for (let i = 0; i < map1[key]; i++) {
        solution += key;
      }

      sol.push(solution);
    }
  }
  for (let key in map2) {
    let solution1 = '';
    if (!(key in map1) && map2[key] > 1) {
      solution1 += '2:';
      for (let i = 0; i < map2[key]; i++) {
        solution1 += key;
      }

      sol.push(solution1);
    }
  }

  let semifinal = sol.sort();

  let superFinal = semifinal.sort((a, b) => b.length - a.length);

  return superFinal.join('/');
};
