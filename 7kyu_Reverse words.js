// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  let arr = str.split(" ");
  let reversedArr = [];

  const reverser = (a) => {
    if (a.length === 0) {
      return;
    }
    let temp = "";
    console.log(a);
    for (let i = a[0].length - 1; i >= 0; i--) {
      temp += a[0][i];
    }
    reversedArr.push(temp);
    reverser(a.slice(1));
  };

  reverser(arr);
  return reversedArr.join(" ");
}
