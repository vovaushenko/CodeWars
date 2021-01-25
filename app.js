const sortme = (arr) => {
  arr.sort((a, b) =>
    a.replace(/\D/g, '') !== b.replace(/\D/g, '')
      ? a.replace(/\D/g, '') - b.replace(/\D/g, '')
      : a > b
  );

  return arr;
};

console.log(sortme(['web-1305', 'site-1305', 'web-1304', 'site-1304']));
