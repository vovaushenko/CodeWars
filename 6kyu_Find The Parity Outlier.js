// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(arr) {
  //lets check whether the predominant number of numbers is odd or even
  let oddCount = 0;
  let evenCount = 0;
  // will loop through array and count
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? evenCount++ : oddCount++;
  }
  let evenMajority;
  evenCount >= 2 ? (evenMajority = true) : (evenMajority = false);

  switch (evenMajority) {
    case true:
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
          return arr[i];
        }
      }

    case false:
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          return arr[i];
        }
      }
  }
}
