function once(func) {
  let called = false;
  return function (...arguments) {
    if (!called) {
      called = true;
      return func.apply(this, arguments);
    }
  };
}

const once = (passedFunction) => {
  let wasCalled = false;

  return (...arguments) => {
    if (!wasCalled) {
      wasCalled = !wasCalled;

      return passedFunction(arguments);
    }
  };
};
