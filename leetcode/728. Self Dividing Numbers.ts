// 728. Self Dividing Numbers
// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

const isSelfDividing = (num: number): boolean => {
  const digits = [...(num + '')].map(Number);
  for (let digit of digits) {
    if (num % digit !== 0) return false;
  }
  return true;
};

function selfDividingNumbers(left: number, right: number): number[] {
  const selfDividingNumbers = [];
  for (let i = left; i <= right; i++) {
    if (![...(i + '')].includes('0') && isSelfDividing(i)) {
      selfDividingNumbers.push(i);
    }
  }

  return selfDividingNumbers;
}
