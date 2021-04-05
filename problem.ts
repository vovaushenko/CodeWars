// 886. Possible Bipartition

function possibleBipartition(N: number, dislikes: number[][]): boolean {
  const map: any = {};
  for (let pair of dislikes) {
    map[pair[0]] ? map[pair[0]].push(pair[1]) : (map[pair[0]] = [pair[1]]);
  }
  console.log(map);
  const possibilities = [];
  const nums = Array.from({ length: N }, (_, id) => id + 1);

  for (let i = 1; i < N; i++) {
    let possible: any = [];
    if (map[i]) {
      possible = nums.filter((num) => !map[i].includes(num) && num !== i);
    }
    if (possible.length) possibilities.push([i, ...possible]);
  }

  return possibilities.length < 2;
}

possibleBipartition(3, [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
]);
