const sum = (...args) =>
  args.length !== 1 ? args.reduce((a, b) => a + b) : (secondArg) => secondArg + +args;
