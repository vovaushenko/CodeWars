// https://www.codewars.com/kata/5b728f801db5cec7320000c7

const paintLetterboxes = (start, end) => {
  let map = {};
  const range = Array.from({ length: end - start + 1 }, (_, id) => start + id);

  for (let number of range) {
    for (let digit of [...(number + '')]) {
      map[digit] ? map[digit]++ : (map[digit] = 1);
    }
  }

  let result = [];
  for (let i = 0; i < 10; i++) {
    map[i] ? result.push(map[i]) : result.push(0);
  }

  return result;
};
