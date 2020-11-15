// https://www.codewars.com/kata/5572f7c346eb58ae9c000047

const pattern = (n) => {
  let result = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      result += i;
    }
    result += '\n';
  }
  return result.trim();
};

pattern(4);
