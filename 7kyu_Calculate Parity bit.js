// https://www.codewars.com/kata/5df261342964c80028345a0a

function checkParity(parity, bin) {
  //lets firstly convert bin into a decimal number
  let strBin = bin.toString();
  let decimalNum = 0;
  for (let i = 0; i < strBin.length; i++) {
    decimalNum += parseInt(strBin[i]) * 2 ** (strBin.length - 1 - i);
  }

  let isEvenOrOdd;
  bin % 2 === 0 ? (isEvenOrOdd = 'odd') : (isEvenOrOdd = 'even');

  return parity !== isEvenOrOdd ? 1 : 0;
}
