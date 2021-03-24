const comes_after = (str, l) => {
  let res = '';

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i].toLowerCase() === l.toLowerCase()) {
      if (str[i + 1].replace(/[^a-zA-Z]+/g, '')) res += str[i + 1];
    }
  }

  return res;
};
