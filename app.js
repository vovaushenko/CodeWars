// https://www.codewars.com/kata/5389864ec72ce03383000484/train/javascript

const autocomplete = (input, dictionary) => {
  let getRidOfUnnecessary = input.replace(/[^a-zA-Z]+/g, '').toLowerCase();
  console.log(getRidOfUnnecessary);

  let solution = dictionary.filter(
    (a) =>
      a.toLowerCase().includes(getRidOfUnnecessary) &&
      a[0].toLowerCase() === getRidOfUnnecessary[0]
  );

  return solution.slice(0, 5);
};

console.log(
  autocomplete('n~!@#$%^&*()_+1234567890ope', [
    'Airplane',
    'airport',
    'apple',
    'ball',
    'airport',
    'airport',
    'airport',
    'airport',
    'airport',
    'airport',
    'airport',
  ])
);
