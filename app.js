const solution = (input, markers) => {
  const res = input
    .split('\n')
    .map((newLine) => markers.reduce((newLine, marker) => newLine.split(marker)[0].trim(), newLine))
    .join('\n');

  return res;
};

const replaceAllMarkers = (input, find, r) => input.replace(new RegExp(find, 'g'), r);

console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']));
