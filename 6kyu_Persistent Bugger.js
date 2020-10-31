// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num1) {
  //we'll do this recursively
  //initialize counter to count the number of times that helper function will be invoked
  let counter = 0;

  function helper(num) {
    if (num < 10) {
      return;
    }
    let product = 1;
    let str = num.toString();
    for (number of str) {
      product *= parseInt(number);
    }
    //count number of calls
    counter++;

    helper(product);
  }

  helper(num1);
  return counter;
}
