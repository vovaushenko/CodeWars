// https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
  //will make n -> array of numbers

  let arr = [...n.toString()].map(Number);
  let sum = 0;

  //first helping recursion that will count the sum
  function helper(input) {
    if (input.length === 0) {
      return;
    }

    sum += input[0];

    helper(input.slice(1));
    //if some is > 10 then we will call recursion again with new input = sum
    if (sum >= 10) {
      let newArr = [...sum.toString()].map(Number);
      sum = 0;
      helper(newArr);
    }
  }

  helper(arr);

  return sum;
}
