// https://www.codewars.com/kata/5508b1d298b3238397000a56

const getValuesOrMethods = (obj, type) =>
  Object.entries(obj)
    .filter(([_, value]) => typeof value === type)
    .map(([key, value]) => (type === 'number' ? value : key));

const returnSpecifics = (obj) => {
  if (Object.keys(obj).length === 0) return ['The Object is Empty'];
  const values = getValuesOrMethods(obj, 'number');
  const methods = getValuesOrMethods(obj, 'function');

  return [...values, ...methods];
};

console.log(
  returnSpecifics({
    a: 1,
    b: 'str',
    d: true,
    c: 2,
    e: function (a) {
      return a;
    },
    f: 3,
  })
);
