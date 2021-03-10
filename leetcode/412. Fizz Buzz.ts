// 412. Fizz Buzz

const fizzBuzz = (n: number): string[] =>
  Array.from({ length: n }, (_, id) => {
    if (!((id + 1) % 3) && !((id + 1) % 5)) return 'FizzBuzz';
    if (!((id + 1) % 3)) return 'Fizz';
    if (!((id + 1) % 5)) return 'Buzz';

    return id + 1 + '';
  });
