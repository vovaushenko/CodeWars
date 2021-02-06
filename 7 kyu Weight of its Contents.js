// https://www.codewars.com/kata/53921994d8f00b93df000bea

const contentWeight = (bottleWeight, scale) => {
  const [times, _, largerOrSmaller] = scale.split(' ');

  return largerOrSmaller === 'larger'
    ? (bottleWeight * +times) / (+times + 1)
    : bottleWeight - (bottleWeight * +times) / (+times + 1);
};
