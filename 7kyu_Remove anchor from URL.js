// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

const removeUrlAnchor = (url) => {
  const id = url.indexOf("#");

  return id !== -1 ? url.slice(0, id) : url;
};
