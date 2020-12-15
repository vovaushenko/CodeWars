// https://www.codewars.com/kata/5516ab668915478845000780

const reverseByCenter = (str) => {
  if (str.length % 2 === 0) {
    const mid = str.length / 2;
    let firstHalf = str.slice(0, mid);
    let secondHalf = str.slice(mid);
    return secondHalf + firstHalf;
  } else {
    const midPosition = Math.floor(str.length / 2);
    let firstHalf = str.slice(0, midPosition);
    let secondHalf = str.slice(midPosition + 1);
    return secondHalf + str[midPosition] + firstHalf;
  }
};