function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    callbacks.push(() => {
      let num = i;
      return num;
    });
  }

  return callbacks;
}

console.log(createFunctions(5));
