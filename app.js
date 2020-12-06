// https://www.codewars.caom/kata/5158bfce931c51b69b000001

const extractIds = (data) => {
  let result = [];
  const helper = (input) => {
    for (let key in input) {
      if (typeof input[key] === 'object') {
        helper(input[key]);
      }
      if (key === 'id') {
        result.push(input[key]);
      }
    }
  };
  helper(data);
  return result;
};

var d = {
  id: 1,
  items: [{ id: 2 }, { id: 3, items: [{ id: 4 }, { id: 5 }] }],
};

extractIds(d);
