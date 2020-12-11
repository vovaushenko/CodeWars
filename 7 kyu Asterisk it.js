// https://www.codewars.com/kata/5888cba35194f7f5a800008b

const asteriscIt = (input) => {
  if (typeof input === 'object') input = input.join('');
  if (typeof input === 'number') input = [...(input + '')];

  let res = '';

  for (let i = 0; i < input.length; i++) {
    res += input[i];
    if (input[i] % 2 === 0 && input[i + 1] % 2 === 0) {
      res += '*';
    }
  }
  return res;
};