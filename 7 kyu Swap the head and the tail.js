// https://www.codewars.com/kata/5a34f087c5e28462d9000082

const swapHeadAndTail = (arr) => {
  const mid = ~~(arr.length / 2);
  const head = arr.slice(0, mid);
  const tail = arr.length % 2 ? arr.slice(mid + 1) : arr.slice(mid);

  return arr.length % 2 ? [...tail, arr[mid], ...head] : [...tail, ...head];
};
