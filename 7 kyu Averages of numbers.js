//www.codewars.com/kata/5512e5662b34d88e44000060

https: const averages = (arr) => {
  if (arr === null) {
    return [];
  }
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let average = (arr[i] + arr[i + 1]) / 2;
    result.push(average);
  }
  return result;
};
