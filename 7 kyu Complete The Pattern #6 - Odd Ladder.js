//www.codewars.com/kata/55749101ae1cf7673800003e

https: const row = (num) => (num + '').repeat(num);

const pattern = (n) => {
  let output = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) output.push(row(i));
  }

  return output.join('\n');
};
