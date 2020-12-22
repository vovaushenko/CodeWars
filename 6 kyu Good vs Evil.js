// https://www.codewars.com/kata/52761ee4cffbc69732000738

const goodVsEvil = (good, evil) => {
  if (evaluateGood(good) == evaluateEvil(evil))
    return 'Battle Result: No victor on this battle field';

  return evaluateGood(good) > evaluateEvil(evil)
    ? 'Battle Result: Good triumphs over Evil'
    : 'Battle Result: Evil eradicates all trace of Good';
};

function evaluateGood(good) {
  const GOOD_RACES = {
    0: 1,
    1: 2,
    2: 3,
    3: 3,
    4: 4,
    5: 10,
  };

  return good
    .split(' ')
    .map((numberOfSoldiers, id) => numberOfSoldiers * GOOD_RACES[id])
    .reduce((totalWorth, raceWorth) => totalWorth + raceWorth, 0);
}

function evaluateEvil(evil) {
  const EVIL_RACES = {
    0: 1,
    1: 2,
    2: 2,
    3: 2,
    4: 3,
    5: 5,
    6: 10,
  };
  return evil
    .split(' ')
    .map((numberOfSoldiers, id) => numberOfSoldiers * EVIL_RACES[id])
    .reduce((totalWorth, raceWorth) => totalWorth + raceWorth, 0);
}
