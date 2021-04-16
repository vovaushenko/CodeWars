// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819

const combine = (...objects) => {
  const merge = {};
  for (let obj of objects) {
    for (let key in obj) {
      merge[key] ? (merge[key] += obj[key]) : (merge[key] = obj[key]);
    }
  }
  return merge;
};
