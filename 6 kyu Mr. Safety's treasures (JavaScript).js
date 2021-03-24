const unlock = (lock) => {
  lock = lock.toLowerCase();
  const lookup = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  let unlocked = '';
  for (let char of lock) {
    for (let key in lookup) {
      if (lookup[key].includes(char)) unlocked += key;
    }
  }

  return unlocked;
};
