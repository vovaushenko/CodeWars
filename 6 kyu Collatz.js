// https://www.codewars.com/kata/5286b2e162056fd0cb000c20

const collatz = (num) => {
  let sequence = [];

  const helper = (n) => {
    if (n === 1) {
      sequence.push(1);
      return;
    }
    sequence.push(n);

    n % 2 !== 0 ? helper(3 * n + 1) : helper(n / 2);
  };

  helper(num);
  return sequence.join('->');
};
