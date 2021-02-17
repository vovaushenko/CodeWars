// https://www.codewars.com/kata/53c2c3e78d298dddda000460

Array.prototype.groupBy = function (fn) {
  const res = {};
  if (!fn) {
    for (let el of this) {
      if (!(el in res)) {
        res[el] = [el];
      } else {
        res[el].push(el);
      }
    }
    return res;
  }

  for (let el of this) {
    if (!(fn(el) in res)) {
      res[fn(el)] = [el];
    } else {
      res[fn(el)].push(el);
    }
  }

  return res;
};
