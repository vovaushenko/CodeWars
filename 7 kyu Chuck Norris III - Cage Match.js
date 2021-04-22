// https://www.codewars.com/kata/57061b6fcb7293901a000ac7
const headSmash = (arr) =>
  arr.length === 0
    ? 'Gym is empty'
    : Array.isArray(arr)
    ? arr.map((el) => el.replace(/O/g, ' '))
    : `This isn't the gym!!`;
