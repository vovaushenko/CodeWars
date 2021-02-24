// 345. Reverse Vowels of a String
// Write a function that takes a string as input and reverse only the vowels of a string.

// swap function, to swap two values in array
const swap = (a: string[], id1: number, id2: number) => ([a[id1], a[id2]] = [a[id2], a[id1]]);

const reverseVowels = (str: string): string => {
  //convert string into array for further swapping
  const arr = str.split('');
  const vowels = 'aeiouAEIOU';

  //store indexes of vowels in swapIds array
  const swapIds = [];
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) swapIds.push(i);
  }

  //use to pointers in indexes array
  let k = 0;
  let j = swapIds.length - 1;
  //iterate through id-array and swap vowels in our initial arr
  while (k < j) {
    swap(arr, swapIds[k], swapIds[j]);
    k++;
    j--;
  }

  return arr.join('');
};
