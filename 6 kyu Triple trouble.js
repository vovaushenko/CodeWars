// https://www.codewars.com/kata/55d5434f269c0c3f1b000058

const tripledouble = (num1, num2) => {
  let triple = false;
  let double = false;
  let tripleNums = [];
  let doubleNums = [];

  const number1 = String(num1);
  const number2 = String(num2);
  // check for triples in first num
  for (let i = 0; i < number1.length; i++) {
    if (number1[i] === number1[i + 1] && number1[i] === number1[i + 2]) {
      triple = true;
      tripleNums.push(number1[i]);
    }
  }
  

  //check for doubles in second num 
  for (let j = 0; j < number2.length; j++) {
    if (number2[j] === number2[j + 1]) {
      double = true;
      doubleNums.push(number2[j]);
    }
  }
  
  for (let num of tripleNums) {
    if (doubleNums.includes(num)) {
      return 1
    }
  }
  return 0
};