// 989. Add to Array-Form of Integer
// For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

// Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

const addToArrayForm = (arr, num) => [...add(arr.join(''), num + '')];

function add(A, B) {
  const AL = A.length;
  const BL = B.length;
  const ML = Math.max(AL, BL);

  let carry = 0,
    sum = '';

  for (let i = 1; i <= ML; i++) {
    let a = +A.charAt(AL - i);
    let b = +B.charAt(BL - i);

    let t = carry + a + b;
    carry = (t / 10) | 0;

    t %= 10;

    sum = i === ML && carry ? carry * 10 + t + sum : t + sum;
  }

  return sum;
}
