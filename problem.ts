// 345. Reverse Vowels of a String
// Write a function that takes a string as input and reverse only the vowels of a string.

const swap = (a: string[], id1: number, id2: number) => ([a[id1], a[id2]] = [a[id2], a[id1]]);

const reverseVowels = (str: string): string => {
  const arr = str.split('');
  const vowels = 'aeiouAEIOU';

  const swapIds = [];
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) swapIds.push(i);
  }

  let k = 0;
  let j = swapIds.length - 1;

  while (k < j) {
    swap(arr, swapIds[k], swapIds[j]);
    k++;
    j--;
  }

  return arr.join('');
};
console.log(reverseVowels('aA'));
// "hello"
// i    j
