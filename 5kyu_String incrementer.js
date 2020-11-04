// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString(str) {
  let strArr = [];
  let numArr = [];
  for (let char of str) {
    Number(char) || char === "0" ? numArr.push(char) : strArr.push(char);
  }
  if (numArr.length === 0) {
    return (str += "1");
  }
  let strPortion = strArr.join("");
  let inc = Number(numArr.join("")) + 1;
  inc = String(inc);
  if (inc.length === numArr.length) {
    return (strPortion += inc);
  } else {
    for (let i = 0; i <= numArr.length - inc.length; i++) {
      inc = "0" + inc;
    }
    return (strPortion += inc);
  }
}
