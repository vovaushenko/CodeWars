// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna) {
  let arr = [...dna];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'A') {
      arr[i] = 'T';
    } else if (arr[i] === 'T') {
      arr[i] = 'A';
    } else if (arr[i] === 'C') {
      arr[i] = 'G';
    } else if (arr[i] === 'G') {
      arr[i] = 'C';
    }
  }
  return arr.join('');
}

console.log(DNAStrand('GTAT'));
