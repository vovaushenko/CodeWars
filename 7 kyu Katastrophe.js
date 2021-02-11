// https://www.codewars.com/kata/55a3cb91d1c9ecaa2900001b

const strongEnough = (earthquake, age) => {
  earthquake = earthquake
    .map((el) => el.reduce((a, b) => a + b, 0))
    .reduce((product, n) => product * n, 1);
  const strength = 1000 * Math.pow(0.99, age);
  return strength > earthquake ? 'Safe!' : 'Needs Reinforcement!';
};
