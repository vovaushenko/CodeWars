function defaultExample(x, y = 7) {
  return x + y;
}

function restExample(x, ...y) {
  return x * y.length;
}

function spreadExample(x, y, z) {
  return x + y + z;
}
