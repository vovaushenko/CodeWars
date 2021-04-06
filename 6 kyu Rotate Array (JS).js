// https://www.codewars.com/kata/54f8b0c7a58bce9db6000dc4

const rotate = (arr, rot) => {
  if (!rot || Math.abs(rot) % arr.length === 0) return arr;

  if (rot < 0) {
    rot = rot * -1;
    while (rot > arr.length) {
      rot -= arr.length;
    }
    let firstPart = arr.slice(0, rot);
    let secondPart = arr.slice(rot);
    return [...secondPart, ...firstPart];
  } else {
    while (rot > arr.length) {
      rot -= arr.length;
    }
    let firstPart = arr.slice(-rot);
    let secondPart = arr.slice(0, arr.length - rot);

    return [...firstPart, ...secondPart];
  }
};
