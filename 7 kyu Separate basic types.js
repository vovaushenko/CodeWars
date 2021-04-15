// https://www.codewars.com/kata/60113ded99cef9000e309be3

function separateTypes(input) {
  return input.reduce((types, value) => {
    const valueType = typeof value;
    const type = types[valueType];
    types[valueType] = type ? [...type, value] : [value];
    return types;
  }, {});
}
