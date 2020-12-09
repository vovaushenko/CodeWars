// https://www.codewars.com/kata/569d488d61b812a0f7000015

const dataReverse = (inputArray) => {
  const perChunk = 8;
  var result = inputArray
    .reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, [])
    .reverse();
  
  result = result.reduce((a, b) => a.concat(b), []);
  return result
};
