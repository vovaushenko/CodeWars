// 1629. Slowest Key

const slowestKey = (releaseTimes, keysPressed) => {
  let durations = {};

  for (let i = 0; i < releaseTimes.length; i++) {
    if (i === 0) {
      durations[keysPressed[i]] = [releaseTimes[i]];
    } else {
      durations[keysPressed[i]]
        ? durations[keysPressed[i]].push(releaseTimes[i] - releaseTimes[i - 1])
        : (durations[keysPressed[i]] = [releaseTimes[i] - releaseTimes[i - 1]]);
    }
  }

  const res = Object.entries(durations)
    .map(([char, dur]) => [char, Math.max(...dur)])
    .sort((a, b) => (a[1] !== b[1] ? b[1] - a[1] : b[0].localeCompare(a[0])));
  return res[0][0];
};

console.log(slowestKey([1, 2, 3], 'aba'));
