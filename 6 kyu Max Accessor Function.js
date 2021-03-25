const max = (data, accessor) =>
  accessor ? Math.max(...data.map((el) => accessor(el))) : Math.max(...res);
