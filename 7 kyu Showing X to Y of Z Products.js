// https://www.codewars.com/kata/545cff101288c1d2da0006fb

const paginationText = (pageNumber, pageSize, totalProducts) => {
  pageNumber--;
  let start = pageNumber * pageSize + 1;
  let end = pageNumber * pageSize + pageSize;
  if (end > totalProducts) end = totalProducts;

  return `'Showing ${start} to ${end} of ${totalProducts} Products.`;
};
