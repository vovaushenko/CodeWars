// 1629. Slowest Key

// A newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time.

// You are given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence, and a sorted list releaseTimes, where releaseTimes[i] was the time the ith key was released. Both arrays are 0-indexed. The 0th key was pressed at the time 0, and every subsequent key was pressed at the exact time the previous key was released.

// The tester wants to know the key of the keypress that had the longest duration. The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0].

// Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key may not have had the same duration.

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
