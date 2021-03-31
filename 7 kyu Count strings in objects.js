// https://www.codewars.com/kata/565b3542af398bfb50000003

const strCount = (obj) => {
  let counter = 0;

  const traverseObject = (object) => {
    for (let key in object) {
      if (typeof object[key] === 'string') counter++;
      if (typeof object[key] === 'object') traverseObject(object[key]);
    }
  };

  traverseObject(obj);

  return counter;
};
