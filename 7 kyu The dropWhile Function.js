const dropWhile = (arr, pred) => {
  const res = [];
  let drop = true;
  for (let num of arr) {
    if (!pred(num)) drop = false;

    if (!drop) {
      res.push(num);
    }
  }

  return res;
};
