//https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

function reverse(str) {
  const strArr = str.trim().split(' ');
  const arr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 !== 0) {
      arr.push([...strArr[i]].reverse().join(''));
    } else {
      arr.push(strArr[i]);
    }
  }

  return arr.join(' ');
}
