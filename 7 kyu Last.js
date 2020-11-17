// https://www.codewars.com/kata/541629460b198da04e000bb9

const last = (...input) => {
  if (input.length > 1) {
    return input[input.length - 1];
  } else {
    return input[0][input[0].length - 1] ? input[0][input[0].length - 1] : input[0];
  }
};
