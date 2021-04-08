// https://www.codewars.com/kata/558c04ecda7fb8f48b000075/train/javascript

const same = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  const flat1 = a1.reduce((fl, subarr) => fl.concat(...subarr), []).sort((a, b) => a - b);
  const flat2 = a2.reduce((fl, subarr) => fl.concat(...subarr), []).sort((a, b) => a - b);
  return JSON.stringify(flat1) === JSON.stringify(flat2);
};

console.log(
  same(
    [
      [2, 1],
      [3, 6],
    ],
    [
      [6, 3],
      [5, 2],
    ]
  )
);
