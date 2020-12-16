// https://www.codewars.com/kata/55830eec3e6b6c44ff000040

const oddity = (num) => {
  let counter = [];
  for (let i = 1, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) counter.push(i);
  }
  console.log(counter);

  // return counter % 2 === 0 ? 'even' : 'odd';
};

console.log(oddity(4));
