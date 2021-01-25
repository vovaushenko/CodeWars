const sortme = (arr) => {
  arr.sort((a, b) =>
    a.replace(/\D/g, '') !== b.replace(/\D/g, '')
      ? a.replace(/\D/g, '') - b.replace(/\D/g, '')
      : a > b
  );

  return arr;
};
