// 658. Find K Closest Elements

function findClosestElements(arr: number[], k: number, x: number): number[] {
  const differences = arr.map((num) => Math.abs(x - num));

  let minId = differences.indexOf(Math.min(...differences));
  console.log(minId);

  let closest = [arr[minId]];
  let [i, j] = [minId - 1, minId + 1];
  console.log(arr[i], arr[j]);

  while (closest.length < k && i >= 0 && j <= arr.length) {
    if (arr[i] !== undefined && arr[j] !== undefined && k - arr[i] <= arr[j] - k) {
      closest.push(arr[i]);
      i++;
    } else {
      closest.push(arr[j]);
      console.log(j);
      j++;
    }
  }
  console.log(closest);
  //   while (closest.length < k) {}
  //   console.log('object');
  //   return closest.sort((a, b) => a - b);
  return [1];
}

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
