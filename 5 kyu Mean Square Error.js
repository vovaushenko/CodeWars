//www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

https: const solution = (a1, a2) =>
  a1.reduce((total, num, id) => total + Math.abs(num - a2[id]) ** 2, 0) / a1.length;
