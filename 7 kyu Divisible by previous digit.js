// https://www.codewars.com/kata/5a2809dbe1ce0e07f800004d

const divisibleByLast = (num) => {
  const number = [...(num + '')].map(Number);
  const divisibility = [false];
  let i = 0,
    j = 1;

  while (j < number.length) {
    if (number[i] === 0) divisibility.push(false);

    if (number[i] !== 0) {
      if ((number[j] / number[i]) % 1 == 0) {
        divisibility.push(true);
      } else {
        divisibility.push(false);
      }
    }

    i++;
    j++;
  }
  return divisibility;
};

divisibleByLast(73312);