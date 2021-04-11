// https://www.codewars.com/kata/5f631ed489e0e101a70c70a0

const tourney = (arr) => {
  const rounds = [arr];

  const reduceArray = (a) => {
    if (a.length === 1) return;
    const tempArr = [];
    let [i, j] = [0, 1];
    while (j < a.length + 1) {
      if (a[j]) {
        tempArr.push(Math.max(a[i], a[j]));
      } else {
        tempArr.unshift(a[i]);
      }

      i += 2;
      j += 2;
    }

    rounds.push(tempArr);
    reduceArray(tempArr);
  };

  reduceArray(arr);

  return rounds;
};
