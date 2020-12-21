// https://www.codewars.com/kata/58d3487a643a3f6aa20000ff

const minMinMax = (nums) => {
  let minNumber = Math.min(...nums);
  let maxNumber = Math.max(...nums);
  let smallestAbsent = findSmallestAbsent(minNumber, maxNumber, nums);
  return [minNumber, smallestAbsent, maxNumber];
};



function findSmallestAbsent(min, max, nums) {
  let smallestAbsent;
  while (min < max) {
    min++;

    if (!nums.includes(min)) {
      smallestAbsent = min;
      break;
    }
  }

  return smallestAbsent;
}
