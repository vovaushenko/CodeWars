// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003

const disariumNumber = (num) =>
  [...(num + '')]
    .map((a, id) => Number(a) ** (id + 1))
    .reduce((total, _) => total + _) === num
    ? 'Disarium !!'
    : 'Not !!';