// 1291. Sequential Digits

// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

// АReturn a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

const isSequential = (n: number): boolean => {
  const digits = [...(n + '')];
  let [i, j] = [0, 1];

  while (j < digits.length) {
    if (+digits[j] - +digits[i] !== 1) return false;
    i++;
    j++;
  }

  return true;
};

const sequentialDigits = (low: number, high: number): number[] => {
  const res = [];

  let firstSequential = low;

  while (!isSequential(firstSequential)) {
    firstSequential++;
  }
  const increment = +'1'.repeat(String(low).length);

  while (firstSequential < high) {
    if (isSequential(firstSequential)) {
      res.push(firstSequential);
    }
    if (firstSequential + increment >= high) break;
    firstSequential += increment;
  }

  while (firstSequential <= high) {
    if (isSequential(firstSequential) && !res.includes(firstSequential)) res.push(firstSequential);
    firstSequential++;
  }

  return res;
};

console.log(sequentialDigits(100, 300));
