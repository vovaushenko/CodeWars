// https://www.codewars.com/kata/57f7b8271e3d9283300000b4

const evenOrOdd = (s) => {
  let arr = s.split("").map(Number);

  let oddTotal = 0;
  let evenTotal = 0;

  for (let number of arr) {
    number % 2 === 0 ? (evenTotal += number) : (oddTotal += number);
  }

  if (oddTotal > evenTotal) {
    return "Odd is greater than Even";
  }
  if (oddTotal < evenTotal) {
    return "Even is greater than Odd";
  }
  if ((oddTotal = evenTotal)) {
    return "Even and Odd are the same";
  }
};
