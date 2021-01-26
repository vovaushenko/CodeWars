// https://www.codewars.com/kata/51f9d3a6e5a42591ae0001eb
const extend = (...objects) => {
  let extendedObject = {};

  for (let object of objects) {
    if (isObject(object)) {
      for (let key in object) {
        if (!(key in extendedObject)) extendedObject[key] = object[key];
      }
    }
  }

  return extendedObject;
};
