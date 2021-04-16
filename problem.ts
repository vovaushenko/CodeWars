function fib1(n: number): number {
  let fibs = [0, 1];
  while (fibs.length <= n) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }

  return fibs[n];
}

console.log(fib1(4));
