// https://www.codewars.com/kata/5df261342964c80028345a0a

// Test.assertEquals(checkParity('even','101010'), 1);
//     Test.assertEquals(checkParity('odd','101010'), 0);
//     Test.assertEquals(checkParity('even','101011'), 0);
//     Test.assertEquals(checkParity('odd','101011'), 1);

function checkParity(parity, bin) {
  //lets firstly convert bin into a decimal number

  let decimalNum = 0;
  for (let i = 0; i < bin.length; i++) {
    decimalNum += parseInt(bin[i]) * 2 ** (bin.length - 1 - i);
  }

  let isEvenOrOdd;
  bin % 2 === 0 ? (isEvenOrOdd = 'odd') : (isEvenOrOdd = 'even');

  return parity !== isEvenOrOdd ? 1 : 0;
}

console.log(checkParity('', ''));
