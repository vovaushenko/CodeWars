// https://www.codewars.com/kata/5300901726d12b80e8000498

const fizzbuzz = (n) =>
    Array.from({ length: n }, (_, id) => {
        if ((id + 1) % 3 === 0 && (id + 1) % 5 === 0) return 'FizzBuzz';
        if ((id + 1) % 3 === 0) return 'Fizz';
        if ((id + 1) % 5 === 0) return 'Buzz';
        return id + 1;
    });