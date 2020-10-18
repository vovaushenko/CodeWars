// Are they the "same"?
// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// }
// a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
// Test.assertEquals(comp(a1, a2), true);

function comp(array1, array2) {
  //if their lengths do not correspond & null
  if (array1.length !== array2.length) return false;
  if (array1 === null || array2 === null) return false;

  // will create 2 objects that contain frequencies of numbers
  let fr1 = {};
  let fr2 = {};

  for (let number of array1) {
    fr1[number] ? fr1[number]++ : (fr1[number] = 1);
  }
  for (let number of array2) {
    fr2[number] ? fr2[number]++ : (fr2[number] = 1);
  }

  //now lets compare the frequencies and values in objects

  for (let key in fr1) {
    if (!(key ** 2 in fr2)) {
      return false;
    }
    if (fr2[key ** 2] !== fr1[key]) {
      return false;
    }
  }
  return true;
}

console.log(
  comp(
    [122, 144, 19, 161, 19, 144, 19, 11],
    [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ]
  )
);
