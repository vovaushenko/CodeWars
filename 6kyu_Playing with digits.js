//https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p) {
  //firstly convert our number to array
  const arr = Array.from(String(n), Number);

  //calculate the sum of elements according to the law
  let power = p;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], power);
    power++;
  }
  return sum % n === 0 ? sum / n : -1;
}
