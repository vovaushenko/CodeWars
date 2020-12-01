// https://www.codewars.com/kata/5583d268479559400d000064

const binaryToString = (binary) => {
  if (binary.length === 0) return '';

  let solution = '';

  const helper = (str) => {
    if (str.length === 0) return;

    let firsrtEight = str.slice(0, 8);
    let digit = parseInt(firsrtEight, 2);
    solution += `${String.fromCharCode(digit)}`;
    
    helper(str.substring(8));
  };

  helper(binary);
  return solution;
};