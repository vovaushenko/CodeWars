// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

const revrot = (str, sz) => {
  if (!str || !sz || sz > str.length) return '';

  // lets recursively split our string into chunks
  let chunks = [];
  (function splitIntoChunks(numbers) {
    if (numbers.length < sz) return;

    let chunk = numbers.slice(0, sz);
    chunks.push(chunk);

    splitIntoChunks(numbers.substring(sz));
  })(str);
  console.log(chunks);

  // lets apply our transformations to chunks
  let result = chunks.map((ch) =>
    isSumOfCubesDivisibleByTwo(ch) ? (ch = reverseChunk(ch)) : (ch = rotateToLeftByOne(ch))
  );
  return result.join('');
};

function isSumOfCubesDivisibleByTwo(str) {
  return [...str].reduce((total, num) => total + Number(num) ** 3, 0) % 2 == 0 ? true : false;
}

function reverseChunk(str) {
  return [...str].reverse().join('');
}

function rotateToLeftByOne(str) {
  let firstChar = str.slice(0, 1);
  let rest = str.slice(1);

  return rest + firstChar;
}
